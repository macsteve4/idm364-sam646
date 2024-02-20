<script>
    import { noodles } from "./data";
	import Ramencard from "./ramencard.svelte";
    const listings = noodles;

</script>

<div class="listing-box">
    <div class="ramenListings">
        {#each listings as {name, spice, price, image}}
        <Ramencard name={name} spice={spice} price={price} image={image} />
        {/each}
    </div>
    </div>

<style>
    .listing-box {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 50px;
}

.ramenListings {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
    max-width: 1175px;

  }
</style>