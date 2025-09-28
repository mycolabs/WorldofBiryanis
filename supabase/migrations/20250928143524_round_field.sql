/*
  # Create partner applications table

  1. New Tables
    - `partner_applications`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `phone_number` (text, required)
      - `email` (text, required)
      - `area` (text, required)
      - `experience` (text, optional)
      - `motivation` (text, optional)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `partner_applications` table
    - Add policy for public insert (anyone can apply)
    - Add policy for authenticated users to read their own applications
*/

CREATE TABLE IF NOT EXISTS partner_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone_number text NOT NULL,
  email text NOT NULL,
  area text NOT NULL,
  experience text DEFAULT '',
  motivation text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE partner_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert applications (public signup)
CREATE POLICY "Anyone can submit applications"
  ON partner_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read their own applications
CREATE POLICY "Users can read own applications"
  ON partner_applications
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_partner_applications_email ON partner_applications(email);
CREATE INDEX IF NOT EXISTS idx_partner_applications_created_at ON partner_applications(created_at DESC);