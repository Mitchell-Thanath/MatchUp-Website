import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hsebyxddyehaemaoetfs.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzZWJ5eGRkeWVoYWVtYW9ldGZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0OTg2MDksImV4cCI6MjA2MzA3NDYwOX0._ZRfHzTgJMh0cbykfk6B5BoA0KmyIjg4TFsEQ0NrqyY'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function findTokensPlayed() {
  console.log('🔍 Looking for tokens played data...\n')
  
  // Check matchups table structure
  console.log('=== MATCHUPS TABLE ===')
  const { data: matchups, error: matchupsError } = await supabase
    .from('matchups')
    .select('*')
    .limit(5)
  
  if (matchupsError) {
    console.log('Error:', matchupsError.message)
  } else if (matchups && matchups.length > 0) {
    console.log('Columns:', Object.keys(matchups[0]).join(', '))
    console.log('Sample:', JSON.stringify(matchups[0], null, 2))
  } else {
    console.log('No data accessible (RLS)')
  }

  // Check predictions table for entry/stake amounts
  console.log('\n=== PREDICTIONS TABLE ===')
  const { data: predictions } = await supabase
    .from('predictions')
    .select('*')
    .limit(3)
  
  if (predictions && predictions.length > 0) {
    console.log('Columns:', Object.keys(predictions[0]).join(', '))
    console.log('Sample:', JSON.stringify(predictions[0], null, 2))
  }

  // Check for transaction/wallet tables
  console.log('\n=== LOOKING FOR ENTRY/STAKE TABLES ===')
  const tables = ['entries', 'stakes', 'wagers', 'matchup_entries', 'user_entries', 'bets', 'matchup_stakes']
  
  for (const table of tables) {
    try {
      const { data, error, count } = await supabase
        .from(table)
        .select('*', { count: 'exact' })
        .limit(2)
      
      if (!error && data) {
        console.log(`✅ ${table}: ${count} rows`)
        if (data[0]) {
          console.log(`   Columns: ${Object.keys(data[0]).join(', ')}`)
          console.log(`   Sample: ${JSON.stringify(data[0])}`)
        }
      }
    } catch (e) {}
  }

  console.log('\n✨ Done!')
}

findTokensPlayed()

