<script>

  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { supabase } from '$lib/supabase';
  import { get } from 'svelte/store';
  import { cart } from '$lib/cartStore.js';

  let count = 1;

  let noodleDetails = {};

  onMount(async () => {
    const queryParams = get(page).url.searchParams;
    const productId = queryParams.get('id');
    const { data, error } = await supabase
      .from('noodles')
      .select('*')
      .eq('id', productId)
      .single();

    if (error) {
      console.error('Error fetching noodle details:', error);
    } else {
      noodleDetails = data;
    }
  });
  function formatPrice(price) {
    const numericPrice = parseInt(price, 10);
    let formattedPrice = numericPrice.toString();
    formattedPrice = formattedPrice.slice(0, -2) + "." + formattedPrice.slice(-2);
    return `$${formattedPrice}`;
  }

  let noodlesAddedToCart = false;

  function addToCart() {
    cart.update(items => {
      const existingItemIndex = items.findIndex(item => item.id === noodleDetails.id);
      if (existingItemIndex !== -1) {
          let newItems = [...items];
          newItems[existingItemIndex] = {
            ...newItems[existingItemIndex],
            quantity: newItems[existingItemIndex].quantity + count
          };
          return newItems;
      } else {
        const productToAdd = {
          flavor: noodleDetails.flavor,
          price: noodleDetails.price,
          image: noodleDetails.image,
          quantity: count,
          id: noodleDetails.id,
        };
        return [...items, productToAdd];
      }
    });
    noodlesAddedToCart = true;

    setTimeout(() => {
      noodlesAddedToCart = false;
    }, 2000);
  }


  function decrementCount() {
    if (count > 1) {
      count--;
    }
  }

  function incrementCount() {
    count++;
  }

</script>

<h1 class="opener">Item View</h1>

{#if noodleDetails}
  <div class="holderofitemholder">
    <div class="itemholder">
      <div class="imageside">
      <img class="itemthing" src="{noodleDetails.image}" alt={noodleDetails.flavor} />
      </div>
      <div class= "deetside">
      <h2 class="ramenitemName">{noodleDetails.flavor}</h2>
      <p class="ramenitemSpice">🔥 {noodleDetails.spice}</p>
      <h3 class="ramenitemPrice">{formatPrice(noodleDetails.price)}</h3>
      <div class="countermabob">
        <button class="minus" on:click={decrementCount} on:keydown={(e) => {if (e.key === 'Enter') decrementCount()}}>-</button>
            <p class="ramenitemSpice"> {count} </p>
            <button class="plus" on:click={incrementCount} on:keydown={(e) => {if (e.key === 'Enter') incrementCount()}}>+</button>

      </div>
          <button class="btnitem" on:click={addToCart}> Add to Cart </button>
          {#if noodlesAddedToCart}
            <div class="messageToCart">
              <p class="messagetext">Added to cart!</p>
            </div>
          {/if}
          <button class="action"><a class="back" href="/"> BACK </button>
          </div>
          </div>
          </div>
  
{:else}
  <p>Loading noodle details...</p>
{/if}

<style>

.opener {
		margin-top: 22px;
		margin-bottom: 22px;
		text-align: center;
		color: rgb(190, 35, 35);
        font-family: 'Saira Condensed', sans-serif;
	}

  .holderofitemholder {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.itemholder {
    display: flex;
    flex-direction: column;
    min-width: 370px;
    background-color: #ffe0e0;
    filter: drop-shadow(0px 5px 3px rgba(0, 0, 0, 0.04));
}

.imageside {
    max-width: 450px;
}

img.itemthing {
    max-width: 375px;
}

.ramenitemName {
    font-family: 'Saira Condensed', sans-serif;
    font-size: 2rem;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-top: 14px;
}

.ramenitemSpice {
    font-family: 'Saira Condensed', sans-serif;
    font-size: 1.7rem;
    margin-top: 5px;
    margin-bottom: 5px;
}

.ramenitemPrice {
    font-family: 'Saira Condensed', sans-serif;
    font-size: 2rem;
    margin-top: 5px;
    margin-bottom: 5px;
}

.deetside {
  text-align: center;
}

.countermabob {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  
 .btnitem {
  margin: 10px 0;
  background: #222831;
  position: relative;
  transition: all 0.2s;
  overflow: hidden;
  text-align: center;
  font-size: 1.25rem;
  font-family: 'Saira Condensed', sans-serif;
}

button.btnitem {
    text-decoration: none;
    border: none;
    text-transform: uppercase;
    display: inline-block;
    color: #F7F7F7;
    width: 80%;
    padding-top: 8px;
    padding-bottom: 8px;
    letter-spacing: 0.3rem;
    cursor: pointer;
  }
  
button.btnitem:active {
    background: #12151A;
  }

button.action {
        margin-top: 26px;
        margin-bottom: 26px;
        background: #222831;
        position: relative;
        overflow: hidden;
        color: white;
        text-align: center;
        padding: 8px 10px;
        padding-left: 12px;
        padding-right: 10px;
        font-size: 1.25rem;
        font-family: 'Saira Condensed', sans-serif;
        border: none;
        max-height: 48px;
        letter-spacing: 0.3rem;
      }
      
button.plus {
    margin-top: 16px;
    margin-bottom: 16px;
    background: #222831;
    position: relative;
    overflow: hidden;
    color: white;
    text-align: center;
    padding: 0px 6px;
    font-size: 1.25rem;
    font-family: 'Saira Condensed', sans-serif;
    border: none;
    max-height: 48px;
    cursor: pointer;
}

button.minus {
    margin-top: 16px;
    margin-bottom: 16px;
    background: #222831;
    position: relative;
    overflow: hidden;
    color: white;
    text-align: center;
    padding: 0px 7.75px;
    font-size: 1.25rem;
    font-family: 'Saira Condensed', sans-serif;
    border: none;
    max-height: 48px;
    cursor: pointer;
}

a.back {
    text-decoration: none;
    text-align: center;
    border: none;
    display: inline-block;
    color: #F7F7F7;
    width: 100%;
    cursor: pointer;
  } 

  @media (min-width: 768px) {

    .itemholder {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        min-width: 746px;
        border-top: 1px solid #dfdfdf;
        border-left: 1px solid #e9e9e9;
        background-color: #ffe0e0;
        box-shadow: inset 0 -5px 0 0 #ffc7c7;
        filter: drop-shadow(0px 5px 3px rgba(0, 0, 0, 0.04));
        
    }

    img.itemthing {
        max-width: 508px;
    }

    button.btnitem {
        text-decoration: none;
        border: none;
        text-transform: uppercase;
        display: inline-block;
        color: #F7F7F7;
        width: 73%;
        padding-top: 8px;
        padding-bottom: 8px;
        letter-spacing: 0.3rem;
        cursor: pointer;
      }

      button.action {
        margin-top: 26px;
        margin-bottom: 0px;
        background: #222831;
        position: relative;
        overflow: hidden;
        color: white;
        text-align: center;
        padding: 8px 10px;
        padding-left: 12px;
        padding-right: 10px;
        font-size: 1.25rem;
        font-family: 'Saira Condensed', sans-serif;
        border: none;
        max-height: 48px;
        letter-spacing: 0.3rem;
      }

      button.plus {
    margin-top: 16px;
    margin-bottom: 16px;
    background: #222831;
    position: relative;
    overflow: hidden;
    color: white;
    text-align: center;
    padding: 0px 6px;
    font-size: 1.25rem;
    font-family: 'Saira Condensed', sans-serif;
    border: none;
    max-height: 48px;
}

button.minus {
    margin-top: 16px;
    margin-bottom: 16px;
    background: #222831;
    position: relative;
    overflow: hidden;
    color: white;
    text-align: center;
    padding: 0px 7.75px;
    font-size: 1.25rem;
    font-family: 'Saira Condensed', sans-serif;
    border: none;
    max-height: 48px;
}

  a.back {
    text-decoration: none;
    text-align: center;
    border: none;
    display: inline-block;
    color: #F7F7F7;
    width: 100%;
    cursor: pointer;
  } 

      .ramenitemName {
        font-family: 'Saira Condensed', sans-serif;
        font-size: 2rem;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-top: 50px;
    }

  } 
  .messageToCart {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fefefe;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    font-size: 1rem;
    text-align: center;
    width: 200px;
    font-family: 'Saira Condensed', sans-serif;
    border: 1px solid #bbbbbb;
  }

  .messagetext {
	  text-align: center;
	  color: rgb(190, 35, 35);
    font-family: 'Saira Condensed', sans-serif;
    font-size: 1.8rem;
  }

</style>