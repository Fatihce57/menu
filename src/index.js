import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';

const App = () => {
  return (

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
        menuName="Pasta"
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
      <Menu
        productID="5"
        menuIMG="./assets/item-5.jpg"
        menuName="Apple Juice"
        productPrice="7 $"
        menuRecipe="
          A maximum level of 10,0 µg/kg has been established for apple juice and solid apple products, including apple compote and apple puree, for infants and young children."
      />
      <Menu
        productID="6"
        menuIMG="./assets/item-6.jpg"
        menuName="Pizza"
        productPrice="14 $"
        menuRecipe="Pizza is also a popular classic in Berlin, whether round or by the meter, vegetarian or with salami, in a chic restaurant or from one of the many pizza-in-hand shops. Berlin has a wide range of options that you can quickly lose yourself in."
      />
      <Menu
        productID="7"
        menuIMG="./assets/item-7.jpg"
        menuName="Baklava"
        productPrice="8 $"
        menuRecipe="Baklava is a dessert from Turkey and means puff pastry pie in German. With our simple recipe you can easily make original baklava yourself."
      />
      <Menu
        productID="8"
        menuIMG="./assets/item-8.jpg"
        menuName="Breakfast"
        productPrice="15 $"
        menuRecipe="Roasted Cauliflower with Pomegranate Seeds, herbs, Lemon Fillets and Olive Oil | Gerösteter Blumenkohl mit Granatapfel Samen, Zitronen Filets und Olivenöl"
      />
    </div>

  );
};




ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

