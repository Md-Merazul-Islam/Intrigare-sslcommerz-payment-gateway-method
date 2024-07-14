import React from 'react';
import './Header.css';
import wel from '../img/header.png'; 

function Header() {
  return (
    <div className='header-container'>
      <div><img className='img' src={wel} alt="Header" /></div>
      <div className='welcome'>
        <h1>Welcome To Our <br />First React Website</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi tempora ex ipsam voluptatum at rerum alias magnam eveniet, quis autem incidunt ad maiores nobis quasi, tenetur, magni laboriosam. Vero earum facere soluta adipisci, quisquam minima totam est! Deserunt, beatae inventore nostrum ratione, numquam libero iusto voluptates optio corporis autem pariatur veritatis fuga. Debitis impedit, corporis soluta consequuntur optio praesentium voluptatem accusamus repellat repellendus quae, voluptate tempore ipsam veritatis! Facilis molestiae obcaecati totam odit accusantium excepturi non beatae quia adipisci explicabo perferendis cupiditate perspiciatis numquam quae illum eligendi, et impedit a magnam. Autem ipsa dignissimos veritatis blanditiis nulla, nihil esse libero.</p>
      </div>
    </div>
  );
}

export default Header;
