import { FC } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export interface AuthHeaderProps {}

export const AuthHeader: FC<AuthHeaderProps> = () => {
  const location = useLocation();

  const buttonText =
    location.pathname === "/login"
      ? "Don't have an account? Sign Up"
      : "Returning user? Log In";
  const buttonLink = location.pathname === "/login" ? "/signup" : "/login";

  const linkStyle = {
    textDecoration: "none", // Remove underline
  };

  return (
    <Navbar
      expand="lg"
      className="bg-white shadow py-md-4 d-flex align-items-center justify-content-center"
      style={{ height: "70px" }}
    >
      <Container className="d-flex justify-content-between">
        <Link to={"/"} style={linkStyle}>
          <img src="/assets/logo.png" alt="logo-img" />
        </Link>
        <Link to={buttonLink} style={linkStyle}>
          <Button className="btn-secondary-bg border-0 rounded-pill px-4 py-2 d-none d-sm-block">
            {buttonText}
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
};
