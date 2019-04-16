<template>
	<section class='container'>
		<div>
			<logo/>
			<h1 class='title'>Loading via asyncdata</h1>
			<h2 class='subtitle'>I bet you see an error.</h2>
			<div class='links'>
				<NuxtLink to='/'>go back</NuxtLink>
			</div>
			<br>
			<pre v-text='ticker'/>
		</div>
	</section>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
	components: {
		Logo
	},

	data() {
		return {
			ticker: []
		};
	},

	asyncData({ app }) {
		return app.$axios
			.$get('ticker')
			.then(response => ({ ticker: response.data }))
			.catch(err => {
				console.log(err);
				return { ticker: 'failed to load from api', err };
			});
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
</style>
