<script>
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabase';

  let products = [];

  onMount(async () => {
    const { data, error } = await supabase
      .from('noodles')
      .select('*');

    if (error) {
      console.error('Error fetching products:', error);
    } else {
      products = data;
    }
  });
  function formatPrice(price) {
      const numericPrice = parseInt(price, 10);
      let formattedPrice = numericPrice.toString();
      formattedPrice = formattedPrice.slice(0, -2) + "." + formattedPrice.slice(-2);
      return `$${formattedPrice}`;
  }
</script>

{#each products as product}
<div class="container">
<div class="card">
  <div class="card-header">
    <div class="overlay"/>
    <a href="/details?id={product.id}">
      <button class="view-item">View Item</button>
    </a>
      <img src={product.image} alt={product.flavor} />
  </div>
  <div class="card-body">
    <h2 class="ramenName">{product.flavor}</h2>
    <p class="ramenSpice">🔥 {product.spice}</p>
    <hr />
    <h3 class="ramenPrice">{formatPrice(product.price)}</h3>
    <!-- <div class="btn6">
      <button on:click={addToCart}> Add to Cart </button>
    </div> -->
  </div>
</div>
</div>
{/each}

<style>

hr {
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F7F7F7;
}

.card {
  border: 1px solid #ececec;
  width: 298px;
  min-width: 250px;
  height: 360px;
  text-align: center;
  background: #ececec;
  position: relative;
  overflow: hidden;
  transition: all 0.4s;
}

.card-header {
  background: white;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
}

.card-header > img {
  width: 80%;
}

h2.ramenName {
    margin: 0;
    font-size: 1.5rem;
}

p.ramenSpice {
    margin: 0;
    font-size: 1.2rem;
}

h3.ramenPrice {
  margin: 0;
  font-size: 1.8rem;
}

.card-body {
  padding: 10px;
  font-family: 'Saira Condensed', sans-serif;
  width: 278px;
  position: absolute;
  background: #fff5e0;
  bottom: -59px;
  transition: 0.4s;
}

/* View Item Btn */
.view-item {
  position: absolute;
  top: -5rem;
  margin-left: 41px;
  padding: 8px 16px;
  border: 2px solid #F7F7F7;
  background: transparent;
  text-transform: uppercase;
  outline: 0;
  color: white;
  font-size: 1.25rem;
  font-family: 'Saira Condensed', sans-serif;
  letter-spacing: 0.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.view-item:hover {
  background: #202020;
  color: #ffe29e;
  transition: 0.3s;
}

/* Card Hover Animation */
.card-header .overlay {
  width: 100%;
  height: 100%;
  background: black;
  position: absolute;
  opacity: 0;
  transition: 0.5s;
}

.card:hover .card-header > .overlay {
  opacity: 0.7;
  transition: 0.5s;
}

.card:hover .view-item {
  opacity: 1;
  top: 20%;
}

.card:hover .card-body {
  bottom: 0;
  transition: 0.4s;
}

.card:hover .card-header {
  height: 200px;
  transition: 0.4s;
}

.card:hover {
  box-shadow: 0px 10px 17px -5px rgba(0,0,0,0.26);
}

</style>