import React from 'react'
import database from '../Product'
import 'bootstrap/dist/css/bootstrap.css';
export default function Cards() {
  return (
    <div>
      {
        database.map(
          (parf)=>(
            <div class="card" style={{width:' 18rem'}} key={parf.id}>
  <img src={parf.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">name:{parf.name}</h5>
    <p class="card-text">description:{parf.description}</p>
    <p class="card-text">price:{parf.price}</p>
  </div>
  
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>


          )
        )
      }
      <h1>frhlhrlhr</h1>
    </div>
  )
}
