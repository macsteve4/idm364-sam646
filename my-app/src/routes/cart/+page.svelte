<script>

    import { cart } from '$lib/cartStore.js';
    import Modal from '$lib/popup.svelte';

    let showModal = false;

    function clearCart() {
    cart.set([]);
    }

    function checkout() {
    clearCart();
        showModal = true;
    }

    function formatPrice(price) {
        const numericPrice = parseInt(price, 10);
        let formattedPrice = numericPrice.toString();
        formattedPrice = formattedPrice.slice(0, -2) + "." + formattedPrice.slice(-2);
            return `$${formattedPrice}`;
    }

    function decrementCount(itemId) {
        cart.update(items => {
            return items.map(item => {
                if (item.id === itemId && item.quantity > 1) {
                    item.quantity -= 1;
                }
                return item;
            });
        });
    }

    function incrementCount(itemId) {
        cart.update(items => {
            return items.map(item => {
                if (item.id === itemId) {
                    item.quantity += 1;
                }
                    return item;
            });
        });
    }

</script>

<h1 class="opener">Your Cart</h1>

    {#if $cart.length > 0}

    {#each $cart as item}
        <div class="cartholder">
            <div class="ramencheckout">
                <div class="ramenpeek">
                    <div class="peekhead">
                        <h2 class="saleName">{item.flavor}</h2>
                        <h2 class="salePrice">{formatPrice(item.price)}</h2>
                    </div>
                    <div class="peekhead">
                        <img class="cartitem" src="{item.image}" alt="Picture of {item.flavor} packet."/>
                        <div class="quantitymodder">
                            <button class="minus" on:click={() => decrementCount(item.id)}>-</button>
                            <p class="ramenitemSpice">{item.quantity}</p>
                        <button class="plus" on:click={() => incrementCount(item.id)}>+</button>
                        </div>
                    </div>
        <button class="delete" on:click={() => cart.update(items => items.filter(i => i !== item))}>DELETE</button>
        </div>
    </div>
</div>        
{/each}
{:else}
<img class="messageimg" src="https://i.imgur.com/13uABbU.png" alt="empty bowl, you have an empty cart!" width="195" height="188">
<p class="messagetext">Your cart is empty...</p>
{/if}
<div class="actionareaholder">
    <div class="actionarea">
        <button class="action"><a class="back" href="/">BACK</button>
        <button class="action" on:click={checkout}>CHECKOUT</button>
    </div>
</div>

<Modal {showModal}/>

<style>

.opener {
	margin-top: 22px;
	margin-bottom: 22px;
	text-align: center;
	color: rgb(190, 35, 35);
    font-family: 'Saira Condensed', sans-serif;
}

.messagetext {
	text-align: center;
	color: rgb(190, 35, 35);
    font-family: 'Saira Condensed', sans-serif;
    font-size: 1.8rem;
}

.ramencheckout {
    margin: 0.5rem;
    width: fit-content;
    border-style: solid;
    border-left-width: 2px;
    border-right-width: 1px;
    border-color: #ececec;
    background: #fff5e0;
    min-width: 300px;
    filter: drop-shadow(0px 5px 3px rgba(0, 0, 0, 0.04));
}

.ramenpeek {
    padding: 20px;
}


.peekhead {
    display: flex;
    justify-content: space-between;
    min-width: 300px;
}

img.cartitem {
    max-width: 60px;
}

.quantitymodder {
    display: flex;
    gap: 10px;
}

h2.saleName {
    font-family: 'Saira Condensed', sans-serif;
    margin-top: 0px;
    margin-bottom: 5px;
}

.ramenitemSpice {
    font-family: 'Saira Condensed', sans-serif;
    font-size: 1.4rem;
    margin-top: 15px;
    margin-bottom: 5px;
}

.salePrice {
    font-family: 'Saira Condensed', sans-serif;
    margin-top: 0px;
    margin-bottom: 5px;
}

button.action {
    margin-top: 26px;
    background: #222831;
    position: relative;
    overflow: hidden;
    color: white;
    text-align: center;
    padding: 8px 10px;
    font-size: 1.25rem;
    font-family: 'Saira Condensed', sans-serif;
    border: none;
    max-height: 48px;
    letter-spacing: .3rem;
}

button.delete {
    margin-left: 225px;
    background: transparent;
    text-decoration: underline;
    position: relative;
    overflow: hidden;
    color: #000000b1;
    text-align: center;
    font-size: 1.25rem;
    font-family: 'Saira Condensed', sans-serif;
    border: none;
    cursor: pointer;
    max-height: 48px;
    letter-spacing: .1rem;
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
    letter-spacing: .3rem;
} 

.messageimg {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

.actionareaholder {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
}

.actionarea {
    display: flex;
    justify-content: space-between;
    min-width: 320px;
}

.cartholder {
    align-items: center;
    display: flex;
    flex-direction: column;
}

</style>