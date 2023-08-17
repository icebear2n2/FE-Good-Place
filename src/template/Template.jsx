import { Container, Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
const Template = () => {
    return <>
        <Navbar>
            <Link to="/" className='navbar-brand'>Home</Link>
            <Nav>
                <NavItem>
                    <Link to="/member">member</Link>
                </NavItem>
                <NavItem>
                    <Link to="/login">login</Link>
                </NavItem>
            </Nav>
        </Navbar>
        <Container fluid="md">
            <Outlet></Outlet>
        </Container>
    </>
}
export default Template;