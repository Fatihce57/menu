import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import { Card } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <div className="card-group">
        <Menu
          productID="1"
          menuIMG="./assets/item-1.jpeg"
          menuName="Pancake"
          productPrice="5 $"
          menuRecipe="A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter."
        />
        <Menu
          productID="2"
          menuIMG="./assets/item-2.jpg"
          menuName="Hamburger"
          productPrice="6 $"
          menuRecipe="This is a very complete burger recipe where you make the burger yourself. If you want to make things easier for yourself, you can also buy beautiful handcrafted hamburgers. The focus is therefore on the preparation and then this classic with bacon, cheddar and jalapeño tastes delicious!"
        />
        <Menu
          productID="3"
          menuIMG="./assets/item-3.jpg"
          menuName="Nudeln"
          productPrice="7 $"
          menuRecipe="The recipe offers a great combination of pasta and vegetables. The noodles in paprika sauce taste spicy and juicy."
        />
        <Menu
          productID="4"
          menuIMG="./assets/item-4.jpg"
          menuName="Orange Juice"
          productPrice="4 $"
          menuRecipe="We get orange juice delivered to our door with the milk,on Mondays, Wednesdays and Fridays. We get one pint of milk one carton of orange juice."
        />
      </div>
    </div>
  );
};




ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Menu />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

