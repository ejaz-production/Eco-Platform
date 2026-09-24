-- Run once in the existing Supabase project's SQL editor.
-- Only the backend service-role key may read or write commerce data.
create table if not exists public.commerce_state (
  id text primary key check (id in ('catalog', 'events')),
  data jsonb not null,
  revision bigint not null default 0 check (revision >= 0)
);
alter table public.commerce_state enable row level security;
revoke all on public.commerce_state from anon, authenticated;
grant select, insert, update on public.commerce_state to service_role;
