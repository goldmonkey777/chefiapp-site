import { createClient } from '@supabase/supabase-js'

// Supabase client - uses the SAME Supabase project as the main ChefIApp app
// Only accesses the marketing_leads_restaurants table for lead capture
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type for marketing leads (landing page form submissions)
export interface MarketingLead {
  id?: string
  restaurant_name: string
  business_type: string
  city_country: string
  employee_count: string
  contact: string
  main_pain_point?: string
  source?: string
  created_at?: string
}

/**
 * Insert a new marketing lead from the landing page
 * This only writes to the marketing_leads_restaurants table
 * and does NOT access any production tables from the main app
 */
export async function insertMarketingLead(lead: Omit<MarketingLead, 'id' | 'created_at' | 'source'>) {
  const { data, error } = await supabase
    .from('marketing_leads_restaurants')
    .insert([{
      ...lead,
      source: 'landing-chefiapp.com'
    }])
    .select()

  if (error) {
    console.error('Error inserting marketing lead:', error)
    throw error
  }

  return data
}

/*
=============================================================================
SQL TO CREATE THE MARKETING LEADS TABLE IN YOUR EXISTING SUPABASE PROJECT
=============================================================================

Run this in the Supabase SQL Editor (same project as the main ChefIApp app):

-- Create marketing leads table (separate from app production tables)
CREATE TABLE IF NOT EXISTS marketing_leads_restaurants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_name TEXT NOT NULL,
  business_type TEXT NOT NULL,
  city_country TEXT NOT NULL,
  employee_count TEXT NOT NULL,
  contact TEXT NOT NULL,
  main_pain_point TEXT,
  source TEXT DEFAULT 'landing-chefiapp.com',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add comment to clarify purpose
COMMENT ON TABLE marketing_leads_restaurants IS 'Marketing leads from chefiapp.com landing page. Separate from app production data.';

-- Enable Row Level Security
ALTER TABLE marketing_leads_restaurants ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for landing page form)
CREATE POLICY "Allow anonymous inserts from landing page" 
  ON marketing_leads_restaurants
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Optional: Create policy for authenticated users to read (for admin dashboard later)
CREATE POLICY "Allow authenticated users to read leads"
  ON marketing_leads_restaurants
  FOR SELECT
  TO authenticated
  USING (true);

=============================================================================
*/
