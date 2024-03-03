import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_DB_URL;
const supabaseKey = import.meta.env.VITE_DB_PASSWORD;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
