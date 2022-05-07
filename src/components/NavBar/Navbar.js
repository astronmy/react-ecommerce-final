import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import CartContext from '../../context/CartContext'
import { Link, NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getCategories } from '../../services/firebase/firestore'
import { orderCategories } from '../../helpers/NavBarHelper';



const NavBar = ({ name }) => {

  const [categories, setCategories] = useState([])
  const { getQuantity } = useContext(CartContext)

  useEffect(() => {
    getCategories().then(categories => {
      orderCategories(categories)
      setCategories(categories)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <header className='header'>
      <Link to='/'>
        <h1 className='header__title'>{name}</h1>
      </Link>
      <div className="menu">
        {
          categories.map(cat =>
            <NavLink
              key={cat.id}
              to={`/category/${cat.id}`}
              className={({ isActive }) => isActive ? 'active' : 'option'}
            >
              {cat.description}
            </NavLink>)
        }
      </div>
      <div>
        {getQuantity() > 0 && <CartWidget />}
      </div>

    </header>
  )

}
export default NavBar;