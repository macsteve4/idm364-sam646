<header class="header">
    <div class="logo"><a href="/"><img src="https://i.imgur.com/CM8Cv8m.png" alt="Buldak Logo" class="logo"></a></div>
    <input class="menu-btn" type="checkbox" id="menu-btn">
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
        <li><a href="/api">API</a></li>
        <li><a href="/cart"><img src="https://i.imgur.com/gZHcF58.png" alt="shopping cart" class="cart"></a></li>
    </ul>
</header>

<style>
    .header {
    position: absolute;
    z-index: 1;
    width: -webkit-fill-available;
    width: -moz-available;
}

.header li a {
    display: block;
    padding: 24px 40px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 19px;
    text-align: center;
}

.header .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 10px 10px;
    width: 100px;
}

.header ul {
    margin-top: 2rem;
    padding: 0;
    list-style: none;
    overflow: hidden;
}

ul {
    font-family: 'Saira Condensed', sans-serif;
    font-size: 19px;
    max-width: 550px;
    line-height: 30px;
}

img.cart {
    width: 36px;
}

/* navigation here */
.header .menu {
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
    margin: 30px;
    margin-top: 17px;
  }
  
  /* menu borger */
  .header .menu-icon {
    cursor: pointer;
    float: right;
    padding-top: 2.5rem;
    padding-right: 49px;
    position: relative;
    user-select: none;
  }
  
  .header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
  }
  
  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }
  
  .header .menu-icon .navicon:before {
    top: 5px;
  }
  
  .header .menu-icon .navicon:after {
    top: -5px;
  }
  
  /* menu button */
  .header .menu-btn {
    display: none;
  }
  
  .header .menu-btn:checked ~ .menu {
    max-height: 240px;
  }
  
  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }
  
  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }
  
  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }
  
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  li {
    float: none;
    background-color: #ffecbcf2;
}

@media (min-width: 768px) {

  .header .menu {
  clear: none;
  float: right;
  max-height: none;
  }   

  .header .menu-icon {
      display: none;
  }

  .header li a {
      padding: 19px 30px;
  }

  .header .logo {
      width: 136px
  }

  li {
    float: left;
    background: none;
}
}

</style>