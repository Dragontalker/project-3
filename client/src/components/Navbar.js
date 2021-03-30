import { NavLink } from "react-router-dom";
import { useStoreContext } from "./GlobalStore";

function Navbar() {

  const [store, updateStore] = useStoreContext();

  function handleLogout() {
    updateStore({type:"logout"});
  }

  function openShopCart() {
    updateStore({type:"toggle-shop-cart"});
  }

  function openNavExt() {
    updateStore({type:"toggle-nav-ext"});
  }

  function renderNavigation() {
    if (store.winX > 800 && store.loggedIn) return(
      <div className="navbar-nav">
        <NavLink exact to="/" className="nav-link" activeClassName="disabled">Home</NavLink>
        <button className="btn nav-link" onClick={openShopCart}>Shopping Cart</button>
        <button className="btn nav-link" onClick={handleLogout}>Logout</button>
      </div>
    )
    else if (store.winX > 800) return (
      <div className="navbar-nav">
        <NavLink exact to="/" className="nav-link" activeClassName="disabled">Home</NavLink>
        <NavLink to="/register" className="nav-link" activeClassName="disabled">Register</NavLink>
        <NavLink to="/login" className="nav-link" activeClassName="disabled">Login</NavLink>
      </div>
    )
    else return (
      <div className="navbar-nav">
        <button className="btn navbar-toggler-icon" onClick={openNavExt}></button>
      </div>
    )
  }

  return(
    <nav className="navbar navbar-expand navbar-dark bg-dark main-nav">
      <div className="container-fluid">
        {/* Logo/Branding */}
        <span className="navbar-brand">Peak Everest Furnitures</span>
        {/* Navlinks */}
        {renderNavigation()}
      </div>
    </nav>
  )
}

export default Navbar;