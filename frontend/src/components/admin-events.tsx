"use client";
import { useEffect, useMemo, useState } from "react";
import { api } from "@/lib/supabase";
import { Activity, MousePointer2, Eye, Clock, RefreshCw } from "lucide-react";
import { Dropdown } from "./dropdown";
type Event = { session: string; type: "page_view" | "click" | "page_time"; path: string; target: string; device: string; timezone: string; city?: string; country?: string; duration: number; at: string };
export function AdminEvents({ isAdmin }: { isAdmin: boolean }) {
  const [section, setSection] = useState("Overview");
  const [events, setEvents] = useState<Event[]>([]), [days, setDays] = useState(7), [device, setDevice] = useState("all"), [kind, setKind] = useState("all"), [search, setSearch] = useState(""), [loading, setLoading] = useState(false), [error, setError] = useState(""), [refresh, setRefresh] = useState(0);
  useEffect(() => {
    if (!isAdmin) return;
    let alive = true;
    setLoading(true); setError("");
    api<{ events: Event[] }>(`/admin/events?days=${days}`).then(r => { if(alive) setEvents(r.events); }).catch(e => { if(alive) setError(e.message); }).finally(() => { if(alive) setLoading(false); });
    return () => { alive = false; };
  }, [days, isAdmin, refresh]);
  const filtered = useMemo(() => events.filter(e => (device === "all" || e.device === device) && (e.path + " " + e.target).toLowerCase().includes(search.toLowerCase())), [events, device, search]);
  const views = filtered.filter(e => e.type === "page_view"), clicks = filtered.filter(e => e.type === "click");
  const sessions = new Set(views.map(e => e.session)).size;
  const duration = filtered.filter(e => e.type === "page_time").reduce((s,e) => s + e.duration, 0);
  function counts(items: Event[], key: "path" | "target" | "timezone" | "device" | "city") {
    const map = new Map<string, number>(); items.forEach(e => map.set(e[key] || "Unknown", (map.get(e[key] || "Unknown") || 0) + 1));
    return [...map].sort((a,b) => b[1]-a[1]).slice(0,8);
  }
  function ranking(title: string, rows: [string, number][]) {
    return <section className="event-card"><h2>{title}</h2>{rows.length ? rows.map(([label, count]) => <div className="event-rank" key={label}><div><span title={label}>{label}</span><strong>{count}</strong></div><div className="event-track"><i style={{width:`${count / Math.max(rows[0][1],1)*100}%`}} /></div></div>) : <p className="muted">No events in this view yet.</p>}</section>;
  }
  function donut(title: string, rows: [string, number][]) {
    const total = rows.reduce((sum, [, n]) => sum + n, 0);
    const colors = ["#4779ed", "#55b7a3", "#a18ad3", "#edb65a", "#e28395", "#6c9eb6", "#8a94a6", "#c5ceda"];
    let offset = 0;
    const stops = rows.map(([, n], i) => { const start = offset; offset += n / Math.max(total,1) * 100; return colors[i % colors.length] + " " + start + "% " + offset + "%"; });
    return <section className="event-card"><h2>{title}</h2><div className="donut-layout"><div className="event-donut" role="img" aria-label={title + ": " + (total ? rows.map(([l,n]) => l + " " + n).join(", ") : "No data")} style={{background:total ? "conic-gradient(" + stops.join(",") + ")" : "#edf0f5"}}><div><strong>{total}</strong><small>events</small></div></div><div className="donut-legend">{rows.map(([l,n],i)=><div key={l}><i style={{background:colors[i % colors.length]}}/><span>{l}</span><strong>{Math.round(n/total*100)}%</strong></div>)}{!total && <p className="muted">No activity yet.</p>}</div></div></section>;
  }
  const daily = Array.from({length:days}, (_,i) => {
    const day = new Date(); day.setDate(day.getDate()-days+1+i);
    const key = day.toLocaleDateString("en-CA", {timeZone:"Asia/Karachi"});
    return { label:day.toLocaleDateString("en-PK",{month:"short",day:"numeric",timeZone:"Asia/Karachi"}), count:views.filter(e=>new Date(e.at).toLocaleDateString("en-CA",{timeZone:"Asia/Karachi"})===key).length };
  });
  const max = Math.max(1,...daily.map(d=>d.count));
  const log = filtered.filter(e => kind === "all" || e.type === kind).slice().reverse().slice(0,100);
  return <div className="events-workspace">
    <nav className="event-tabs" aria-label="Events sections">{["Overview","Pages","Clicks","Locations","Timeline"].map(name=><button key={name} aria-current={section===name?"page":undefined} className={section===name?"selected":""} onClick={()=>setSection(name)}>{name}</button>)}</nav>
    <div className="event-toolbar"><input aria-label="Filter events by page or control" placeholder="Find a page or clicked control" value={search} onChange={e=>setSearch(e.target.value)} /><Dropdown ariaLabel="Date range" value={String(days)} onChange={v=>setDays(Number(v))} options={[{value:"1",label:"Today / last 24h"},{value:"7",label:"Last 7 days"},{value:"30",label:"Last 30 days"}]} /><Dropdown ariaLabel="Device filter" value={device} onChange={setDevice} options={[{value:"all",label:"All devices"},{value:"mobile",label:"Mobile"},{value:"desktop",label:"Desktop"}]} /><button className="button small-button" disabled={!isAdmin || loading} onClick={()=>setRefresh(r=>r+1)}><RefreshCw size={15}/>Refresh</button></div>
    {!isAdmin && <p className="admin-note">Sign in with an administrator account to view real visitor activity. No sample traffic is shown.</p>}
    {error && <p role="alert" className="form-error">{error}</p>}
    {loading ? <div className="skeleton skeleton-hero"/> : <>
    <div className="stat-grid four">{[{label:"Page views",value:views.length,icon:Eye},{label:"Visit sessions",value:sessions,icon:Activity},{label:"Clicks",value:clicks.length,icon:MousePointer2},{label:"Active seconds / view",value:views.length?Math.round(duration/views.length):0,icon:Clock}].map(s=><div key={s.label}><s.icon size={18}/><span>{s.label}</span><strong>{s.value}</strong></div>)}</div>
    {section === "Overview" && <><section className="event-card"><div className="section-heading"><h2>Traffic over time</h2><small>Pakistan time · page views</small></div><div className="traffic-chart" role="img" aria-label={daily.map(d=>`${d.label}: ${d.count} views`).join(", ")}>{daily.map((d,i)=><div key={i} title={`${d.label}: ${d.count} views`}><span>{d.count}</span><i style={{height:Math.max(2,d.count/max*140)}}/><small>{days<=7 || i%5===0?d.label:""}</small></div>)}</div></section>
    <div className="event-grid">{donut("Device share",counts(views,"device"))}{donut("Activity mix",[["Page views",views.length],["Clicks",clicks.length],["Active time reports",filtered.filter(e=>e.type==="page_time").length]])}</div></>}
    {section === "Pages" && <div className="event-grid">{ranking("Most visited pages",counts(views,"path"))}{donut("Top pages · view share",counts(views,"path"))}</div>}
    {section === "Clicks" && <div className="event-grid">{ranking("Most clicked controls",counts(clicks,"target"))}{donut("Top controls · click share",counts(clicks,"target"))}</div>}
    {section === "Locations" && <><p className="admin-note">Cities are approximate IP-based estimates. Local/private connections and older events show Unknown; browser time zones are never converted into cities.</p><div className="event-grid">{ranking("Visitor cities",counts(views,"city"))}{donut("Top cities · view share",counts(views,"city"))}{ranking("Visitor time zones",counts(views,"timezone"))}</div></>}
    {section === "Timeline" && <section className="event-card"><div className="section-heading"><h2>Event timeline</h2><Dropdown ariaLabel="Event type" value={kind} onChange={setKind} options={[{value:"all",label:"All events"},{value:"page_view",label:"Page views"},{value:"click",label:"Clicks"},{value:"page_time",label:"Active time"}]} /></div><p className="muted">Latest 100 matching events · timings in Pakistan time</p><div className="table-scroll"><table><thead><tr><th>Time</th><th>Event / control</th><th>Page</th><th>Device</th><th>City</th><th>Time zone</th><th>Active time</th></tr></thead><tbody>{log.map((e,i)=><tr key={i}><td>{new Date(e.at).toLocaleString("en-PK",{timeZone:"Asia/Karachi",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})}</td><td>{e.type.replaceAll("_"," ")}<small>{e.target || "—"}</small></td><td>{e.path}</td><td>{e.device}</td><td>{e.city || "Unknown"}{e.country && <small>{e.country}</small>}</td><td>{e.timezone}</td><td>{e.type==="page_time"?`${e.duration}s`:"—"}</td></tr>)}</tbody></table>{!log.length && <p className="empty">Activity will appear as shoppers browse your store.</p>}</div></section>}
    </>}
    <p className="analytics-disclosure">First-party activity from public shopping pages only. Cities are estimated using a local IP database; no visitor IP is sent to an external geolocation service or stored. No passwords, form entries, IP addresses or account pages are recorded. Do Not Track is respected. Retention: 30 days, up to 20,000 events. Session counts are per browser tab; activity can be incomplete when tracking is blocked.</p>
  </div>;
}
