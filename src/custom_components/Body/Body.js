import React from 'react'
import cat1 from '../assets/img/cat1.jpg'
import cat2 from '../assets/img/cat2.jpg'
import cat3 from '../assets/img/cat3.jpg'
export default function Body() {
  return (
    <>
    <div class="container" style={{marginTop:"-210px" }}>
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src={cat1 } height="300px" width="300px" alt="Card image cap"/>
          <div class="card-body" style={{alignSelf: "center"}}>
            <h5 class="card-title" style={{alignContent:"center"}}>Laptop & Accessories</h5>
          
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={cat2} alt="Card image cap"/>
          <div class="card-body" style={{alignSelf: "center"}}>
            <h5 class="card-title" style={{alignContent:"center"}}>Mobiles</h5>
     
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={cat3} alt="Card image cap"/>
          <div class="card-body" style={{alignSelf: "center"}}>
            <h5 class="card-title">Grocesries</h5>
            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
