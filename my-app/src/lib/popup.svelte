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
        <p class="messagetext">Your order is confirmed!</p>
        <img class="messageimg" src="https://i.imgur.com/jGFh2RA.png" alt="thank you, enjoy!" width="320" height="320">
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
    margin: 15% auto; /* Center modal vertically and horizontally */
    padding: 20px;
    border: 1px solid #888;
    width: 50%; /* Adjust modal width as needed */
    max-width: 400px; /* Set maximum modal width */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow effect */
    position: relative; /* Position modal content relative to modal */
  }

  button.close {
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