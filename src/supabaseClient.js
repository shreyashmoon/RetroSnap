// Supabase client initialization
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://yknwiblxgysgdzegzinq.supabase.co'; // TODO: Replace with your Supabase project URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrbndpYmx4Z3lzZ2R6ZWd6aW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyMzkwODMsImV4cCI6MjA3MjgxNTA4M30.Wql5RD2T4f5xBtE7S6_yzTHmemw4LSPIytU_DYSnsgs'; // TODO: Replace with your Supabase anon/public API key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
