import { useState } from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

import Counter from "./Counter";

NavbarAnjay.propTypes = {
  lightTheme: PropTypes.bool,
  toggleTheme: PropTypes.func,
};

export default function NavbarAnjay({ lightTheme, toggleTheme }) {
  const [counter, setCounter] = useState(0);
  const plusHandler = () => setCounter(counter + 1);
  const minusHandler = () => setCounter(counter - 1);

  return (
    <Navbar
      className="bg-body-tertiary shadow"
      data-bs-theme={lightTheme ? "light" : "dark"}
    >
      <Container>
        <Navbar.Brand>{lightTheme ? "Light Mode" : "Dark Mode"}</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={plusHandler}>
            <Button
              className="mx-3"
              variant={lightTheme ? "dark" : "light"}
              aria-label="Increase Counter"
            >
              <i className="bi bi-plus-circle"></i>
            </Button>
          </Nav.Link>
          <Nav.Link onClick={() => alert(`Counter Value = ${counter}`)}>
            <Counter counterValue={counter} />{" "}
          </Nav.Link>
          <Nav.Link onClick={minusHandler}>
            <Button
              className="mx-3"
              variant={lightTheme ? "dark" : "light"}
              aria-label="Decrease Counter"
            >
              <i className="bi bi-dash-circle"></i>
            </Button>
          </Nav.Link>
          <Nav.Link onClick={toggleTheme} className="my-auto">
            {lightTheme ? (
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
