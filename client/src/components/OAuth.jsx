import { supabase } from '../supabaseClient';

export default function OAuth() {

  const handleGoogleClick = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:5173', // redirect back to app
           skipBrowserRedirect: false,
          queryParams: {
            prompt: 'select_account', // forces account picker to show
        },
      }
      });
    } catch (error) {
      console.log('could not sign in with google', error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type='button'
      className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
    >
      Continue with Google
    </button>
  );
}