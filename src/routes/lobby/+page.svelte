<script lang="ts">
    import { getUser, isLoading } from '$lib/stores/auth.svelte';
    import { goto } from '$app/navigation';
  
    // Get reactive user state
    let user = $derived(getUser());
    let loading = $derived(isLoading());
  
    // Redirect to home if not logged in
    $effect(() => {
      if (!loading && !user) {
        goto('/');
      }
    });
  
    function startRaid() {
      // TODO: Implement raid logic in Phase 2
      goto('/game');
    }
  
    function openMarket() {
      // TODO: Implement market in Phase 6
      console.log('Market opening...');
    }
  
    function openStash() {
      // TODO: Implement stash in Phase 5
      console.log('Stash opening...');
    }
  
    function openLoadout() {
      // TODO: Implement loadout in Phase 5
      console.log('Loadout opening...');
    }
  </script>
  
  {#if loading}
    <div class="min-h-screen flex items-center justify-center bg-gray-900">
      <div class="text-center">
        <svg class="animate-spin h-12 w-12 text-primary-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <div class="text-xl text-gray-400">Loading...</div>
      </div>
    </div>
  {:else if user}
    <div class="min-h-screen bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Main Action Panel -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Start Raid Card -->
            <div class="bg-gray-800 border border-gray-700 rounded-xl shadow-xl p-8">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h2 class="text-3xl font-bold text-white mb-2">Ready to Deploy</h2>
                  <p class="text-gray-400">Enter the extraction zone and survive</p>
                </div>
                <div class="text-right">
                  <div class="text-4xl font-bold text-success-500">12:00</div>
                  <div class="text-sm text-gray-500">Raid Duration</div>
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-primary-900/50 to-primary-800/50 border border-primary-700/50 rounded-lg p-6 mb-6">
                <h3 class="text-lg font-semibold text-primary-300 mb-3">Mission Objective</h3>
                <ul class="space-y-2 text-gray-300">
                  <li class="flex items-center">
                    <span class="text-primary-500 mr-2 font-bold">→</span>
                    Loot valuable items across the map
                  </li>
                  <li class="flex items-center">
                    <span class="text-primary-500 mr-2 font-bold">→</span>
                    Engage or avoid enemy players
                  </li>
                  <li class="flex items-center">
                    <span class="text-primary-500 mr-2 font-bold">→</span>
                    Extract before time runs out
                  </li>
                </ul>
              </div>
              
              <button 
                onclick={startRaid}
                class="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-xl py-6 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                🎯 Enter Raid
              </button>
            </div>
  
            <!-- Stats Grid -->
            <div class="grid grid-cols-3 gap-4">
              <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg">
                <div class="text-gray-400 text-sm mb-1">Total Raids</div>
                <div class="text-3xl font-bold text-white">0</div>
              </div>
              <div class="bg-gray-800 border border-success-700 rounded-lg p-4 shadow-lg">
                <div class="text-gray-400 text-sm mb-1">Extractions</div>
                <div class="text-3xl font-bold text-success-500">0</div>
              </div>
              <div class="bg-gray-800 border border-danger-700 rounded-lg p-4 shadow-lg">
                <div class="text-gray-400 text-sm mb-1">Deaths</div>
                <div class="text-3xl font-bold text-danger-500">0</div>
              </div>
            </div>
          </div>
  
          <!-- Side Panel -->
          <div class="space-y-6">
            <!-- Player Stats -->
            <div class="bg-gray-800 border border-gray-700 rounded-xl shadow-xl p-6">
              <h2 class="text-xl font-bold text-white mb-4 flex items-center">
                <span class="mr-2">👤</span>
                Player Stats
              </h2>
              
              <div class="space-y-4">
                <div class="flex justify-between items-center pb-3 border-b border-gray-700">
                  <span class="text-gray-400">Level</span>
                  <span class="text-white font-semibold text-lg">1</span>
                </div>
                <div class="flex justify-between items-center pb-3 border-b border-gray-700">
                  <span class="text-gray-400">Coins</span>
                  <span class="text-warning-500 font-semibold text-lg">0 💰</span>
                </div>
                <div class="flex justify-between items-center pb-3 border-b border-gray-700">
                  <span class="text-gray-400">K/D Ratio</span>
                  <span class="text-white font-semibold text-lg">0.00</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-400">Win Rate</span>
                  <span class="text-white font-semibold text-lg">0%</span>
                </div>
              </div>
            </div>
  
            <!-- Quick Actions -->
            <div class="bg-gray-800 border border-gray-700 rounded-xl shadow-xl p-6">
              <h2 class="text-xl font-bold text-white mb-4">Quick Actions</h2>
              
              <div class="space-y-3">
                <button 
                  onclick={openMarket}
                  class="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center shadow-md"
                >
                  <span class="mr-2">🛒</span>
                  Market
                </button>
                <button 
                  onclick={openStash}
                  class="w-full bg-info-600 hover:bg-info-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center shadow-md"
                >
                  <span class="mr-2">📦</span>
                  Stash
                </button>
                <button 
                  onclick={openLoadout}
                  class="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center shadow-md"
                >
                  <span class="mr-2">⚙️</span>
                  Loadout
                </button>
              </div>
            </div>
  
            <!-- Warning Box -->
            <div class="bg-danger-900/30 border border-danger-700 rounded-lg p-4">
              <div class="flex items-start">
                <span class="text-2xl mr-3">⚠️</span>
                <div>
                  <h3 class="text-danger-400 font-semibold mb-1">High Risk Zone</h3>
                  <p class="text-danger-300 text-sm">Death means losing everything you bring into the raid.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}