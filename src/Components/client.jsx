/* eslint-disable no-undef */
// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl =  process.env.VITE_LOGIN_SUPERBASE_URL;
const supabaseKey =  process.env.VITE_APP_SUPABASE_KEY;
console.log("supabaseUrl:", supabaseUrl);
export const supabase = createClient(supabaseUrl, supabaseKey);
