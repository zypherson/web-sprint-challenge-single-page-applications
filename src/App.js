import React from "react";
import { Route, Link, Routes} from 'react-router-dom'
import PizzaForm from "./PizzaForm";
import Homepage from "./hompage";
const App = () => {
  return (
    <>
    <header>
        <Link to="/">Homepage</Link>
        <Link id="order-pizza" to="/pizza">order-pizza</Link>
    </header>
      <h1>Lambda Eats</h1>
      
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path="/pizza" element={<PizzaForm/>}/>
            
          
        </Routes>
      
    
      </>
  );
};
export default App;
