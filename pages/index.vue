<template>
	<div
		class="container flex items-center justify-center h-[calc(100dvh-92px)] text-center relative">
		<div>
			<VLink
				:link="fields.link"
				variant="primary">
				<div class="text-2xl flex items-center justify-center text-pink-400">
					{{ fields.button }}
				</div>
			</VLink>
		</div>
	</div>
	<div class="container mx-auto p-4">
		<h1 class="text-2xl font-bold mb-4">Firebase Test Page</h1>
		<button
			@click="testFirebase"
			class="bg-blue-500 text-white px-4 py-2 rounded">
			Test Firebase Connection
		</button>
		<p
			v-if="message"
			class="mt-4">
			{{ message }}
		</p>
	</div>
</template>

<script setup lang="ts">
	import { VLink } from '~/components/ui';
	import { MAIN_BANNER_CONFIG } from '~/configs/pages/index';

	const { $firebase } = useNuxtApp();
	const message = ref('');
	const fields = MAIN_BANNER_CONFIG.block_fields;

	const testFirebase = () => {
		if ($firebase) {
			message.value = 'Firebase подключен успешно!';
		} else {
			message.value = 'Ошибка подключения Firebase';
		}
	};
</script>
