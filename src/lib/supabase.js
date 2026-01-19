import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hsebyxddyehaemaoetfs.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzZWJ5eGRkeWVoYWVtYW9ldGZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0OTg2MDksImV4cCI6MjA2MzA3NDYwOX0._ZRfHzTgJMh0cbykfk6B5BoA0KmyIjg4TFsEQ0NrqyY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to get live stats from the database using secure function
export async function getLiveStats() {
  try {
    // Call the secure database function
    const { data, error } = await supabase.rpc('get_public_stats')
    
    if (error) {
      console.error('Error fetching stats:', error)
      return {
        inProgressMatchups: 0,
        completedMatchups: 0,
        totalPlayers: 0,
        tokensEarned: 0
      }
    }

    return {
      inProgressMatchups: data.in_progress_matchups || 0,
      completedMatchups: data.completed_matchups || 0,
      totalPlayers: data.total_users || 0,
      tokensPlayed: data.tokens_played || 0
    }
  } catch (error) {
    console.error('Error fetching stats:', error)
    return {
      inProgressMatchups: 0,
      completedMatchups: 0,
      totalPlayers: 0,
      tokensPlayed: 0
    }
  }
}

// Subscribe to realtime changes for live updates
export function subscribeToStats(callback) {
  const channel = supabase
    .channel('stats-changes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'users' }, callback)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'matchups' }, callback)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'daily_bonuses' }, callback)
    .subscribe()
  
  return () => {
    supabase.removeChannel(channel)
  }
}

