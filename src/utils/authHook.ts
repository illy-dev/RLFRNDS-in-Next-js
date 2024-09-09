import { useState, useEffect } from 'react';
import { supabase } from '@/utils/db';
import { useRouter } from 'next/navigation'

export function useAuth() {
  const [isLoadingDiscord, setIsLoadingDiscord] = useState<boolean>(false);
  const [user, setUser] = useState<Object | null>();
  const router = useRouter();

  async function signInWithDiscord() {
    setIsLoadingDiscord(true);
    await supabase.auth.signInWithOAuth({
      provider: 'discord',
    });
    setIsLoadingDiscord(false);
  }

  async function signOut() {
    await supabase.auth.signOut()
    if (!user) {router.push('/');}
  }

  useEffect(() => {
    async function fetchSession() {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error fetching session:', error);
      } else {
        setUser(user || null);
        if (user) {router.push('/dashboard');}
      }
    }

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event) => {
        switch (event) {
          case 'SIGNED_IN':
            fetchSession();
            break
          case 'SIGNED_OUT':
            setUser(null);
            break;
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  return { isLoadingDiscord, user, signInWithDiscord, signOut };
}