-- Grant this existing store owner the application admin role.
-- Preserves existing provider metadata and does not change the password.
UPDATE auth.users
SET raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
WHERE id = '4c1c4229-a82c-4638-987e-8f113a8275b7'
  AND email = 'production.eco.platform@gmail.com'
RETURNING id, email, raw_app_meta_data->>'role' AS app_role;
