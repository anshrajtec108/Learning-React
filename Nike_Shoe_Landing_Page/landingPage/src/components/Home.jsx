import React from "react";
import './Home.css'

function Home() {
  return (
    <main className="home">
      <div className="content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="button">
          <button>Shop Now</button>
          <button className="second-btn">Category</button>
        </div>
        <div className="shoping">
          <p>Also Available On</p>
        <div className="brandIcon">
          <img src="/image/amazon.png" alt="amazon Logo"/>  
          <img src="/image/flipkart.png" alt="Flipkart Logo"/>  

        </div>
        </div>
      </div>
      <div className="image">
      <img src="/image/shoe_image.png" alt="Shoe"/>  

      </div>
    </main>
  );
}

export default Home;
