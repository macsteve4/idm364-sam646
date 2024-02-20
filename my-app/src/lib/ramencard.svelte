<script lang="ts">
  export let name: string;
  export let spice: string;
  export let price: Number;
  export let image: any;

</script>

<div class="container">
    <div class="card">
      <div class="card-header">
        <div class="overlay"/>
          <button class="view-item">View Item</button>
          <img src={image} alt="{name}"/>
      </div>
      <div class="card-body">
        <h2 class="ramenName">{name}</h2>
        <p class="ramenSpice">🔥 {spice}</p>
        <h3 class="ramenPrice">$ {price}</h3>
        <div class="btn6">
          <a href="#">Add To Cart</a>
        </div>
      </div>
    </div>
  </div>

  <style>
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

/* Add To Cart Btn needs to be added */

a.view {
  text-decoration: none;
  color: #F7F7F7;
}

.btn6 a {
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  color: #F7F7F7;
  background: #12151A;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  letter-spacing: 0.3rem;
}
/* might need to make this into a button instead (add button to CSS decs) */
.btn6 {
  text-decoration: none;
  border: none;
  text-transform: uppercase;
  display: inline-block;
  color: #F7F7F7;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  letter-spacing: 0.3rem;
  cursor: pointer;
}
/*
.btn6 a::after {
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
*/

.btn6:hover a::after {
  top: 42px;
  left: 170px;
  transition: 0.2s;
}

.btn6:active {
  background: #12151A;
}

/* View Item Btn */
.view-item {
  position: absolute;
  top: -5rem;
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
  color: #222831;
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