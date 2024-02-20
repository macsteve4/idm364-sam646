<script>
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import Banner from '$lib/banner.svelte';
	import Categories from '$lib/categories.svelte';
</script>
<Header/>
<Banner/>
<h1 class="opener"><b>Ramen Flavors</b></h1>
<Categories/>
<Footer/>
<style>
	.opener {
		margin-top: 22px;
		margin-bottom: 22px;
		text-align: center;
		color: rgb(190, 35, 35);
        font-family: 'Saira Condensed', sans-serif;
	}
</style>