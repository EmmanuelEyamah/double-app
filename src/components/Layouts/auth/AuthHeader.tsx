import { FC } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface AuthHeaderProps {}
export const AuthHeader: FC<AuthHeaderProps> = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-white shadow py-4"
      style={{ height: "70px" }}
    >
      <Container className="d-flex justify-content-between">
        <Link to={"/"}>
          <img src="/assets/logo.png" alt="logo-img" />
        </Link>
        <Link to={"/login"}>
          <Button className="btn-secondary-bg border-0 rounded-pill px-4 py-2 ">
            Returning user? Log In
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
};
