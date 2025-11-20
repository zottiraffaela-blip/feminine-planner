// supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vistnaspijtperyasezr.supabase.co";
const supabaseKey = "sb_publishable_jAt0B4PuvJfSMlGPCjJqpw_55f-ZSan";

export const supabaseClient = createClient(supabaseUrl, supabaseKey);