import { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

import Counter from "./Counter";

const useTheme = () => {
  const [navTheme, setNavTheme] = useState(true);
  const toggleTheme = () => setNavTheme(!navTheme);
  return { navTheme, toggleTheme };
};

export default function NavbarAnjay() {
  const { navTheme, toggleTheme } = useTheme();

  const [counter, setCounter] = useState(0);
  const plusHandler = () => setCounter(counter + 1);
  const minusHandler = () => setCounter(counter - 1);

  return (
    <Navbar
      className="bg-body-tertiary shadow"
      data-bs-theme={navTheme ? "light" : "dark"}
    >
      <Container>
        <Navbar.Brand>{navTheme ? "Light Mode" : "Dark Mode"}</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={plusHandler}>
            <Button
              className="mx-3"
              variant={navTheme ? "dark" : "light"}
              aria-label="Increase Counter"
            >
              <i className="bi bi-plus-circle"></i>
            </Button>
          </Nav.Link>
          <Nav.Link onClick={() => alert(`Counter Value = ${counter}`)}>
            <Counter counterValue={counter} />{" "}
            {/* Assuming Counter is a separate component */}
          </Nav.Link>
          <Nav.Link onClick={minusHandler}>
            <Button
              className="mx-3"
              variant={navTheme ? "dark" : "light"}
              aria-label="Decrease Counter"
            >
              <i className="bi bi-dash-circle"></i>
            </Button>
          </Nav.Link>
          <Nav.Link onClick={toggleTheme} className="my-auto">
            {navTheme ? (
              <i className="fs-4 bi bi-moon-stars text-dark"></i>
            ) : (
              <i className="fs-4 bi bi-brightness-high text-light"></i>
            )}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
