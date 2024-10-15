import avatar from './avatar.jpg'
import burger from './menu.png'
import panier from './Shopping cart.png'

function Header() {
  
  return (
    <>
      <header>
        <div className="item-logo">
        <img src={burger} alt="menu-burger" aria-label="Menu" />
        </div>
        <h1 className="brand-logo">NEBULA SHOP</h1>
        <nav>
          <ul className="item-nav">
            <li>
              <img src={panier} alt="shopping-cart" aria-label="Shopping Cart" />
            </li>
            <li>
              <img src={avatar} alt="generic-avatar" aria-label="User Avatar" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
