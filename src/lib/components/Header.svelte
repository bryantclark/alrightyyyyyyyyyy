<script lang="ts">
    import { getUser, signOut } from '$lib/stores/auth.svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import AuthModal from '$lib/components/AuthModal.svelte';
  
    let user = $derived(getUser());
    let showAuthModal = $state(false);
    let isSigningOut = $state(false);
    let currentPath = $derived($page.url.pathname);
  
    function openAuth() {
      showAuthModal = true;
    }
  
    function closeAuth() {
      showAuthModal = false;
    }
  
    async function handleSignOut() {
      isSigningOut = true;
      const result = await signOut();
      if (result.success) {
        goto('/');
      }
      isSigningOut = false;
    }
  
    function goToLobby() {
      goto('/lobby');
    }
  </script>
  
  <header class="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo and Title -->
      <button 
        onclick={goToLobby}
        class="flex items-center space-x-3 hover:opacity-80 transition-opacity"
      >
        <div class="text-3xl">🎯</div>
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Extraction Shooter</h1>
          {#if user && currentPath === '/lobby'}
            <p class="text-sm text-gray-600">{user.email}</p>
          {/if}
        </div>
      </button>
  
      <!-- Auth Actions -->
      <div>
        {#if user}
          <button 
            onclick={handleSignOut}
            disabled={isSigningOut}
            class="bg-danger-500 hover:bg-danger-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSigningOut ? 'Signing Out...' : 'Sign Out'}
          </button>
        {:else}
          <button 
            onclick={openAuth}
            class="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Sign In
          </button>
        {/if}
      </div>
    </div>
  </header>
  
  <AuthModal bind:isOpen={showAuthModal} onClose={closeAuth} />