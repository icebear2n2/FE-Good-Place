import { Container, Nav, NavItem, Navbar } from "reactstrap";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
const Template = () => {
  return (
    <>
      <Navbar>
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Nav>
          <NavItem>
            <Link to="/place">Place</Link>
          </NavItem>
        </Nav>
      </Navbar>
      <Container fluid="md">
        <Outlet></Outlet>
      </Container>
    </>
  );
};
export default Template;
