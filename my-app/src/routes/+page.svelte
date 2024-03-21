<script>
	import Categories from "$lib/categories.svelte";
	import Footer from "$lib/footer.svelte"
  </script>
  
  <h1 class="opener">Ramen Flavors</h1>
  <div class="ramenholder">
	<div class="ramengrid">
	  <Categories/>
	</div>
  </div>
  <Footer/>
  <style>

	.ramenholder {
	  display: flex;
	  justify-content: center;
	  margin-top: 10px;
	  margin-left: 10px;
	  margin-right: 10px;
	  margin-bottom: 50px;
	}
  
	.ramengrid {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-flow: row wrap;
	  gap: 20px;
	  max-width: 1175px;
	}
	
	.opener {
		  margin-top: 22px;
		  margin-bottom: 22px;
		  text-align: center;
		  color: rgb(190, 35, 35);
		  font-family: 'Saira Condensed', sans-serif;
	  }

  </style>