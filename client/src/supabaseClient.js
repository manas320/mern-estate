import { createClient } from '@supabase/supabase-js'

// These variables pull from your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Export the client so other files can import it
export const supabase = createClient(supabaseUrl, supabaseKey)