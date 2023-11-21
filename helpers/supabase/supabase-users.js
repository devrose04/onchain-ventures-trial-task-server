
require('dotenv').config();
const supabase = require('@supabase/supabase-js');

// Create a single supabase client for interacting with your database
const supabaseClient = supabase.createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_ANON_PUBLIC_KEY);

// Columns of `users` table in Supabase DB
const usersDbColumns = [
  "id",
  "username",
  "external_id",
  "first_name",
  "last_name",
  "birthday",
  "gender",
  "image_url",
  "profile_image_url",
  "created_at",
  "updated_at",
  "last_sign_in_at",
  "password_enabled",
  "two_factor_enabled",
  "primary_email_address_id",
  "primary_phone_number_id",
  "email_addresses",
  "external_accounts",
  "phone_numbers"
];

const filterObjectWithKeys = (obj, keys) => {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key]
    return acc;
  }, {});
}

export const insertUser = async (rawData) => {
  const filtered = filterObjectWithKeys(rawData, usersDbColumns);

  const { error } = await supabaseClient
  .from('users')
  .insert(filtered);

  console.log("Insert User Error:", error);
  return error;
}

export const updateUser = async (rawData) => {
  const filtered = filterObjectWithKeys(rawData, usersDbColumns);

  const { error } = await supabaseClient
  .from('users')
  .update(filtered)
  .eq('id', filtered.id);

  console.log("Update User Error:", error);
  return error;
}

export const deleteUser = async (rawData) => {
  const { error } = await supabaseClient
  .from('users')
  .delete()
  .eq('id', rawData.id);

  console.log("Delete User Error:", error);
  return error;
}