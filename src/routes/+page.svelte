<script lang="ts">
	import { getUser } from '$lib/stores/auth.svelte';
	import { goto } from '$app/navigation';
  
	let user = $derived(getUser());
  
	// Redirect to lobby if already logged in
	$effect(() => {
	  if (user) {
		goto('/lobby');
	  }
	});
  
	function triggerSignIn() {
	  // Trigger the header's sign in button
	  const headerButton = document.querySelector('header button');
	  if (headerButton instanceof HTMLElement) {
		headerButton.click();
	  }
	}
  </script>
  
  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white py-20">
	<div class="max-w-7xl mx-auto px-4 text-center">
	  <h2 class="text-5xl md:text-6xl font-bold mb-6">
		High-Stakes Extraction
	  </h2>
	  <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
		Enter the raid. Loot. Fight. Extract. Lose everything or take it all.
	  </p>
	  <div class="flex gap-4 justify-center">
		<button 
		  onclick={triggerSignIn}
		  class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 text-lg"
		>
		  Start Playing
		</button>
		<a 
		  href="#how-it-works"
		  class="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg border border-white/20"
		>
		  Learn More
		</a>
	  </div>
	</div>
  </section>
  
  <!-- How It Works -->
  <section id="how-it-works" class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4">
	  <h3 class="text-4xl font-bold text-gray-900 text-center mb-12">How It Works</h3>
	  
	  <div class="grid md:grid-cols-3 gap-8">
		<div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
		  <div class="text-4xl mb-4">🎒</div>
		  <h4 class="text-xl font-bold text-gray-900 mb-3">1. Enter the Raid</h4>
		  <p class="text-gray-600">
			Deploy into a 12-minute extraction zone with your gear. Choose what to bring wisely - you can lose it all.
		  </p>
		</div>
  
		<div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
		  <div class="text-4xl mb-4">⚔️</div>
		  <h4 class="text-xl font-bold text-gray-900 mb-3">2. Loot & Fight</h4>
		  <p class="text-gray-600">
			Scavenge for weapons, ammo, armor, and valuable items. Engage other players or avoid them - every choice matters.
		  </p>
		</div>
  
		<div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
		  <div class="text-4xl mb-4">🚁</div>
		  <h4 class="text-xl font-bold text-gray-900 mb-3">3. Extract or Die</h4>
		  <p class="text-gray-600">
			Reach the extraction point before time runs out. Success means keeping everything. Failure means losing it all.
		  </p>
		</div>
	  </div>
	</div>
  </section>
  
  <!-- Features -->
  <section class="py-16 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4">
	  <h3 class="text-4xl font-bold text-gray-900 text-center mb-12">Game Features</h3>
	  
	  <div class="grid md:grid-cols-2 gap-6">
		<div class="bg-white border border-gray-200 rounded-lg p-6">
		  <h4 class="text-lg font-bold text-gray-900 mb-2 flex items-center">
			<span class="text-primary-500 mr-2">🔫</span>
			Diverse Arsenal
		  </h4>
		  <p class="text-gray-600">
			Pistols, SMGs, assault rifles, shotguns, and sniper rifles with multiple ammo types.
		  </p>
		</div>
  
		<div class="bg-white border border-gray-200 rounded-lg p-6">
		  <h4 class="text-lg font-bold text-gray-900 mb-2 flex items-center">
			<span class="text-primary-500 mr-2">🛡️</span>
			Armor System
		  </h4>
		  <p class="text-gray-600">
			Four armor tiers providing different levels of protection against incoming fire.
		  </p>
		</div>
  
		<div class="bg-white border border-gray-200 rounded-lg p-6">
		  <h4 class="text-lg font-bold text-gray-900 mb-2 flex items-center">
			<span class="text-primary-500 mr-2">💊</span>
			Wound Management
		  </h4>
		  <p class="text-gray-600">
			Treat normal wounds with meds or broken bones with surgical kits. Manage your health strategically.
		  </p>
		</div>
  
		<div class="bg-white border border-gray-200 rounded-lg p-6">
		  <h4 class="text-lg font-bold text-gray-900 mb-2 flex items-center">
			<span class="text-primary-500 mr-2">💰</span>
			Market Economy
		  </h4>
		  <p class="text-gray-600">
			Buy and sell items between raids. Build your stash, manage your inventory, and prepare for the next deployment.
		  </p>
		</div>
  
		<div class="bg-white border border-gray-200 rounded-lg p-6">
		  <h4 class="text-lg font-bold text-gray-900 mb-2 flex items-center">
			<span class="text-primary-500 mr-2">🍖</span>
			Survival Mechanics
		  </h4>
		  <p class="text-gray-600">
			Monitor energy and hydration levels. Low stats affect your stamina and performance in combat.
		  </p>
		</div>
  
		<div class="bg-white border border-gray-200 rounded-lg p-6">
		  <h4 class="text-lg font-bold text-gray-900 mb-2 flex items-center">
			<span class="text-primary-500 mr-2">🌐</span>
			Real-Time Multiplayer
		  </h4>
		  <p class="text-gray-600">
			Face off against real players in intense firefights. Every raid is unpredictable and unique.
		  </p>
		</div>
	  </div>
	</div>
  </section>
  
  <!-- Stakes Warning -->
  <section class="py-16 bg-gradient-to-r from-danger-600 to-danger-700 text-white">
	<div class="max-w-4xl mx-auto px-4 text-center">
	  <div class="text-5xl mb-4">⚠️</div>
	  <h3 class="text-3xl font-bold mb-4">High Risk, High Reward</h3>
	  <p class="text-xl text-danger-100 mb-6">
		Death in a raid means losing everything you brought in and everything you looted. Only the extracted items make it to your stash.
	  </p>
	  <p class="text-lg text-danger-200">
		Do you have what it takes to survive?
	  </p>
	</div>
  </section>
  
  <!-- CTA -->
  <section class="py-20 bg-gray-900 text-white">
	<div class="max-w-4xl mx-auto px-4 text-center">
	  <h3 class="text-4xl font-bold mb-6">Ready to Deploy?</h3>
	  <p class="text-xl text-gray-300 mb-8">
		Join the fight. Prove your skills. Extract with the spoils or lose it all trying.
	  </p>
	  <button 
		onclick={triggerSignIn}
		class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-12 rounded-lg transition-all transform hover:scale-105 text-lg"
	  >
		Create Account
	  </button>
	</div>
  </section>
  
  <!-- Footer -->
  <footer class="bg-gray-950 text-gray-400 py-8">
	<div class="max-w-7xl mx-auto px-4 text-center">
	  <p>&copy; 2025 Extraction Shooter. Built with Svelte 5 & Firebase.</p>
	</div>
  </footer>