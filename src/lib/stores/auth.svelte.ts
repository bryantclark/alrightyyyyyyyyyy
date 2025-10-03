// src/lib/stores/auth.svelte.ts
import { auth } from '$lib/firebase';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User
} from 'firebase/auth';
import { browser } from '$app/environment';

// Create reactive state using Svelte 5 runes
let user = $state<User | null>(null);
let loading = $state(true);

// Listen for auth state changes only in browser
if (browser && auth) {
  onAuthStateChanged(auth, (firebaseUser) => {
    user = firebaseUser;
    loading = false;
  });
} else if (!browser) {
  loading = false;
}

// Sign up function
export async function signUp(email: string, password: string) {
  if (!browser || !auth) {
    return { success: false, error: 'Auth not available' };
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Sign in function
export async function signIn(email: string, password: string) {
  if (!browser || !auth) {
    return { success: false, error: 'Auth not available' };
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Sign out function
export async function signOut() {
  if (!browser || !auth) {
    return { success: false, error: 'Auth not available' };
  }

  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Export reactive state getters
export function getUser() {
  return user;
}

export function isLoading() {
  return loading;
}