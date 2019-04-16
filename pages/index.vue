<template>
	<section class='container'>
		<div>
			<logo/>
			<h1 class='title'>nuxt-axios-proxy-error-example</h1>
			<h2 class='subtitle'>Trying to reproduce nuxt/axios/proxy error. Open dev tools!</h2>
			<div class='links'>
				<a @click='getData()' class='button'>Click this button to test a $get</a>
				<NuxtLink to='/async-example'>Click to try and fetch in asyncData</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
	components: {
		Logo
	},

	methods: {
		getData() {
			return this.$axios.get('ticker');
		}
	}
};
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	display: block;
	font-weight: 300;
	font-size: 50px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 32px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}

.button {
	border: solid 1px #ccc;
	padding: 3px 8px;
	display: inline-block;
	border-radius: 2px;
}
.button:hover {
	cursor: pointer;
	border-color: #aaa;
}
</style>
