import { Link } from "react-router-dom"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
const Title = () => (
   <a href="/" id="title" key="title">
      <img className="logo" src="https://foodfire-chapter09.netlify.app/Food%20Fire%20Logo.feaf9db9.png"
         alt="logo"></img>
   </a>
);

const Header = () => {
   const cartitems = useSelector(store => store.cart.items);
   return (
      <div className="header">
         <Title />
         <div className="nav-items">
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
               <li>
  <Link to="/cart">
    <i className="fa fa-shopping-cart" style={{ fontSize: '24px' }}></i>
    &nbsp;
    <span className="cart-item-count">{cartitems.length}</span>
  </Link>
</li>



            </ul>
         </div>
      </div>
   )
};
export default Header; 