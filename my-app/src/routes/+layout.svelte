<script>
    import Header from "../lib/header.svelte";
    import Banner from "$lib/banner.svelte";
</script>

<Header />
<Banner />
<main>
    <slot/>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rationale&family=Saira+Condensed:wght@400;600&display=swap');
    
    :global(body) {
        margin: 0;
        padding: 0;
    }

</style>