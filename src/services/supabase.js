import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uxlcwdpkdjwesrxzubgf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4bGN3ZHBrZGp3ZXNyeHp1YmdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5NTYzMzIsImV4cCI6MjA4OTUzMjMzMn0.nuzQh7u84-EDQsu01dQ8oAYorQgDpQyIUF4WBGponeQ'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)