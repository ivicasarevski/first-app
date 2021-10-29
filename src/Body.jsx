import React from 'react';

const Body = () => {
const books = []

    return (
        <div>
            <section>
            <div>
      

      <div class="App">
        <h1 class="text">
          Collection of books:
        </h1>
  
        <br/>
        <br/>
        <div id="wrapper">
        <div id="card" class="card" style={{ width: '14rem', height: '70px '}}>
            <img id="image" src="https://images-na.ssl-images-amazon.com/images/I/91rq1j7GYhL.jpg"   class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title">Lord Of The Rings</h3>
<<<<<<< HEAD
              <p class="card-text">By J.R.R. Tolkien</p>
=======
              <p class="card-text">By J.R.R. Tolki</p>
>>>>>>> 7a884b4cad475dfef0cfe03499a3c6c4db64a8c8
              <h5>Price: 15$</h5>
              <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
        <div id="card" class="card" style={{ width: '14rem', height: '70px '}}>
            <img id="image" src="https://pub-static.fotor.com/assets/projects/pages/f9440db0-93f8-11e9-bd39-fddb51343e46_2531d93a-4d1f-4df1-897a-67cfb79f4b46_thumb.jpg"   class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title">Positive Thoughts </h3>
              
              <p class="card-text">By Jennifer Conner</p>
              <h5>Price: 11$</h5>
              <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
        <div id="card" class="card" style={{ width: '14rem', height: '70px '}}>
            <img id="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLxst_7PAkctS-7Z-oOLSkoI7_6teg9uCUQ&usqp=CAU"   class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title">The Light Between Us</h3>
              <p class="card-text">By Laura Lynne Jackson</p>
              <h5>Price: 14$</h5>
              <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
        </div>
  
  
  
      </div>
      </div>
            </section>
        </div>
    )
}

export default Body;