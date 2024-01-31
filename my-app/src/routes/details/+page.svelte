<script>
	import Banner from "$lib/banner.svelte";

</script>
<Banner />
        <h1 class="opener">View Flavor</h1>
        <div class="holderofitemholder">
        <div class="itemholder">
      <div class="imageside">
            <img class="itemthing" src="https://i.imgur.com/4Cz0Wov.jpeg" alt= "Sample" />
        </div>
        <div class="deetside">
          <h2 class="ramenitemName">Sample</h2>
          <p class="ramenitemSpice">🔥 Sample</p>
          <h3 class="ramenitemPrice">Sample</h3>
          <button class="btnitem">ADD TO CART</button>
          <button class='backitem'>Back</button>

          </div>
        </div>
        </div>

<style>
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

.btnitem a {
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    color: #F7F7F7;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    letter-spacing: 0.3rem;
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
  
  button.btnitem a::after {
    content: "";
    width: 50%;
    height: 700%;
    background: #F7F7F7;
    position: absolute;
    transform: skewX(-40deg);
    top: -250px;
    left: -65px;
    transition: 0.2s;
    opacity: 0.3;
  }
  
  button.btnitem:hover a::after {
    top: 42px;
    left: 170px;
    transition: 0.2s;
  }
  
  button.btnitem:active {
    background: #12151A;
  }

  button.backitem {
    margin-top: 16px;
    margin-bottom: 26px;
    background: #222831;
    position: relative;
    overflow: hidden;
    text-align: center;
    font-size: 1.25rem;
    font-family: 'Saira Condensed', sans-serif;
    border: none;
    max-height: 48px;
  }

  @media (min-width: 768px) {

    .itemholder {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        min-width: 746px;
        background-color: #ffe0e0;
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

      button.backitem {
        margin-top: 26px;
        margin-bottom: 0px;
        background: #222831;
        position: relative;
        overflow: hidden;
        text-align: center;
        font-size: 1.25rem;
        font-family: 'Saira Condensed', sans-serif;
        border: none;
        max-height: 48px;
      }

      .ramenitemName {
        font-family: 'Saira Condensed', sans-serif;
        font-size: 2rem;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-top: 50px;
    }

  } 
</style>