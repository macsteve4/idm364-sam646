<script>
	import Header from '$lib/header.svelte';
	import Banner from '$lib/banner.svelte';
</script>
<Header/>
<Banner/>
<br>
<img class="errorimg" src="https://i.imgur.com/13uABbU.png" alt="error" width="292" height="280">

<h1 class="errortext1">Error!</h1>
<p class="errortext2">This page doesn't seem to exist...</p>

<style>

    .errorimg {
        position: relative;
    left: 50%;
    transform: translateX(-50%);
    }

    .errortext1 {
		text-align: center;
		color: rgb(190, 35, 35);
        font-family: 'Saira Condensed', sans-serif;
        font-size: 2.4rem;
	}

    .errortext2 {
		text-align: center;
		color: rgb(190, 35, 35);
        font-family: 'Saira Condensed', sans-serif;
        font-size: 1.8rem;
	}

</style>