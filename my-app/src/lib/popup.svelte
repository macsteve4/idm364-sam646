<script>
    
    export let showModal = false;
  
    function closeModal() {
      showModal = false;
    }

  </script>
  
  {#if showModal}
    <div class="popup">
      <div class="popupstuff">
        <button class="close" on:click={closeModal}>&times;</button>
        <img class="messageimg" src="https://i.imgur.com/jGFh2RA.png" alt="thank you, enjoy!" width="320" height="320">
        <p class="messagetext">Your order is confirmed!</p>
      </div>
    </div>
  {/if}

<style>

  .popup {
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

  .popupstuff {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  button.close {
    z-index: 9999;
    position: absolute;
    background-color: transparent;
    color: #000000;
    top: 20px;
    right: 20px;
    border: none;
    cursor: pointer;
    font-size: 2.5rem;
  }

  .messagetext {
	  text-align: center;
	  color: rgb(190, 35, 35);
    font-family: 'Saira Condensed', sans-serif;
    font-size: 1.8rem;
  }

  .messageimg {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

</style>