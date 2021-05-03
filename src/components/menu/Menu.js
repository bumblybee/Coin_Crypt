import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button } from "react-bulma-components";

const Menu = () => {
  return (
    <Navbar style={{ padding: "0.5rem 2rem" }}>
      <Navbar.Container align="left">
        <Navbar.Item>
          <Button renderAs={Link} to="/" color="primary">
            Dashboard
          </Button>
        </Navbar.Item>
      </Navbar.Container>
      <Navbar.Container align="right">
        <Navbar.Item>
          <Button renderAs={Link} to="/signup" color="primary">
            Signup
          </Button>
        </Navbar.Item>
      </Navbar.Container>
    </Navbar>
  );
};

export default Menu;
