/*
  # Create partner applications table

  1. New Tables
    - `partner_applications`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `phone_number` (text, required)
      - `email` (text, required)
      - `area` (text, optional)
      - `experience` (text, optional)
      - `motivation` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `partner_applications` table
    - Add policy for anonymous users to insert applications
    - Add policy for authenticated users to read their own applications
*/

CREATE TABLE IF NOT EXISTS partner_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone_number text NOT NULL,
  email text NOT NULL,
  area text DEFAULT '',
  experience text DEFAULT '',
  motivation text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE partner_applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert applications (for public form submissions)
CREATE POLICY "Allow anonymous insertions"
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