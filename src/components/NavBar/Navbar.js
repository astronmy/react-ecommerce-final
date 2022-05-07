import CartWidget from '../CartWidget/CartWidget'
import CartContext from '../../context/CartContext'
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getCategories } from '../../services/firebase/firestore'
import { orderCategories } from '../../helpers/NavBarHelper';
import { Container, Nav, Navbar } from 'react-bootstrap';



const NavBar = ({ name }) => {

  const [categories, setCategories] = useState([])
  const { getQuantity } = useContext(CartContext)

  useEffect(() => {
    getCategories().then(categories => {
      orderCategories(categories)
      setCategories(categories)
    }).catch(error => {
    })
  }, [])

  return (
    <Navbar bg="dark" className='sticky-top navbar-dark' expand="lg">
      <Container>
        <Link className='text-decoration-none text-xs-center' to='/'>
          <Navbar.Brand className='text-light'>{name}</Navbar.Brand>
        </Link>

        {getQuantity() > 0 && <CartWidget />}
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-75 w-xs-auto d-flex justify-content-evenly">
            {
              categories.map(cat =>
                <NavLink
                  key={cat.id}
                  to={`/category/${cat.id}`}
                  className={({ isActive }) => isActive ? 'active text-decoration-none my-3' : 'text-light text-decoration-none my-3 text-center'}
                >
                  {cat.description}
                </NavLink>)
            }
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )

}
export default NavBar;