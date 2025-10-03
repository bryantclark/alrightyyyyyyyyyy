<script lang="ts">
	import { signIn, signUp } from '$lib/stores/auth.svelte';

	let { isOpen = $bindable(), onClose }: { isOpen: boolean; onClose: () => void } = $props();

	let email = $state('');
	let password = $state('');
	let isSignUpMode = $state(false);
	let error = $state('');
	let isSubmitting = $state(false);

	async function handleSubmit() {
		error = '';
		isSubmitting = true;

		if (!email || !password) {
			error = 'Please fill in all fields';
			isSubmitting = false;
			return;
		}

		const result = isSignUpMode ? await signUp(email, password) : await signIn(email, password);

		isSubmitting = false;

		if (result.success) {
			email = '';
			password = '';
			onClose();
		} else {
			error = result.error;
		}
	}

	function toggleMode() {
		isSignUpMode = !isSignUpMode;
		error = '';
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}
</script>

{#if isOpen}
	<div
		role="dialog"
		tabindex="0"
		aria-modal="true"
		aria-labelledby="auth-modal-title"
		class="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 p-4 backdrop-blur-sm"
		onclick={handleBackdropClick}
		onkeydown={(e) => e.key === 'Escape' && onClose()}
	>
		<div class="w-full max-w-md rounded-xl border border-gray-200 bg-white shadow-2xl">
			<!-- Header -->
			<div
				class="flex items-center justify-between rounded-t-xl bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4 text-white"
			>
				<h2 class="text-2xl font-bold">
					{isSignUpMode ? 'Create Account' : 'Sign In'}
				</h2>
				<button onclick={onClose} class="text-white transition-colors hover:text-gray-200">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<!-- Form -->
			<form
				onsubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
				class="p-6"
			>
				<div class="mb-4">
					<label for="email" class="mb-2 block text-sm font-medium text-gray-700"> Email </label>
					<input
						id="email"
						type="email"
						bind:value={email}
						placeholder="your@email.com"
						disabled={isSubmitting}
						class="w-full rounded-lg border-2 border-gray-300 px-4 py-2 transition-colors focus:border-primary-500 focus:outline-none disabled:bg-gray-100 disabled:opacity-50"
						required
					/>
				</div>

				<div class="mb-6">
					<label for="password" class="mb-2 block text-sm font-medium text-gray-700">
						Password
					</label>
					<input
						id="password"
						type="password"
						bind:value={password}
						placeholder="••••••••"
						disabled={isSubmitting}
						class="w-full rounded-lg border-2 border-gray-300 px-4 py-2 transition-colors focus:border-primary-500 focus:outline-none disabled:bg-gray-100 disabled:opacity-50"
						required
					/>
				</div>

				{#if error}
					<div
						class="mb-4 rounded-lg border border-danger-200 bg-danger-50 px-4 py-3 text-sm text-danger-700"
					>
						{error}
					</div>
				{/if}

				<button
					type="submit"
					disabled={isSubmitting}
					class="mb-4 w-full rounded-lg bg-primary-500 py-3 font-semibold text-white transition-colors hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-50"
				>
					{#if isSubmitting}
						<span class="flex items-center justify-center">
							<svg
								class="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
							Processing...
						</span>
					{:else}
						{isSignUpMode ? 'Create Account' : 'Sign In'}
					{/if}
				</button>

				<button
					type="button"
					class="w-full py-2 text-sm text-primary-600 transition-colors hover:text-primary-700"
					onclick={toggleMode}
					disabled={isSubmitting}
				>
					{isSignUpMode ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
				</button>
			</form>
		</div>
	</div>
{/if}
