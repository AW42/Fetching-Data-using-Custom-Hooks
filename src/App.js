import "./styles.css";
import useProductData from './useProductData';


export default function App() {

  const {title,price,image}=useProductData('https://fakestoreapi.com/products/1');
  console.log(price);
return (
    <div className="App">
      
      <h3>{title}</h3>
      <h4>{price}</h4>
      <img src={image} className="imageStyle" alt="item"/>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
