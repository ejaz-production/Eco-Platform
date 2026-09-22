import test from "node:test";
import assert from "node:assert/strict";
import { eventSchema } from "../src/analytics.js";
const event = { session:"ff039c72-9e9c-4c84-bb6f-cf2e89c57412", type:"click", path:"/shop", target:"link:/product/tech-phone", device:"mobile", timezone:"Asia/Karachi", duration:0 };
test("analytics accepts bounded public shopping events", () => assert.equal(eventSchema.parse(event).path,"/shop"));
test("analytics excludes private routes, query strings and unrecognized personal fields", () => {
  for(const path of ["/admin", "/admin/events", "/auth/callback", "/account", "/checkout", "/orders", "/shop?email=test@example.com"]) assert.equal(eventSchema.safeParse({...event,path}).success,false);
  assert.equal(eventSchema.safeParse({...event,email:"test@example.com"}).success,false);
  assert.equal(eventSchema.safeParse({...event,duration:900000}).success,false);
});
