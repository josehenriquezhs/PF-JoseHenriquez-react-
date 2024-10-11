
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import React from 'react';


const firebaseConfig = {
apiKey: "AIzaSyClBBURGMm7yttTpV3k53ihctjXXjBV_xo",
authDomain: "goat-dacde.firebaseapp.com",
projectId: "goat-dacde",
storageBucket: "goat-dacde.appspot.com",
messagingSenderId: "926893194011",
appId: "1:926893194011:web:732f7cbfc16638182ab1be"
};



const ProductList = () => {
  const products = [
    { id: 1, name: 'yezzy 1', price: 5000, stock: 20, image: '/img/yezzy_1.png' },
    { id: 2, name: 'yezzy2', price: 6000, stock: 20, image: '/img/yezzy_2.png' },
    { id: 3, name: 'yezzy3', price: 7000, stock: 25, image: '/img/yezzy_3.jpg' },
  ];

  return (
    <div>
      <h2>Inventario</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <img src={product.image} alt={product.name} style={{ width: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


