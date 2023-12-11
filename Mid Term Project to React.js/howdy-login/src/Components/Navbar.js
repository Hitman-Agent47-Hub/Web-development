import React from 'react'

export default function Navbar() {
  return (
    <>
    <div class="con0"></div>
    {/* <div class="main-cont"> */}
      <div class="con1">
        <div class="con1-1"></div>
        <div class="con1-2"><span id="s1">Current Location</span><img id="arrow" src="../img/arrow.png" alt="img2" /></div>
        <div class="con1-3"><img id="location" src="../img/Map icon.png" alt="img3" /><span id="s1">Nearest Branch</span></div>
        <div class="con1-4">
          <span><a href="#">Home</a></span>
          <span><a href="#">Menu</a></span>
          <span><a href="#">Download App</a></span>
          <span><a href="#">Login</a></span>
          <span><img id="cart" src="../img/cart-38.png" alt="" /></span>
        </div>
      </div>
      {/* </div> */}
      </>
  );
}
