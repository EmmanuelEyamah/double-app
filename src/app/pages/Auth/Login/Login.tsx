import { FC } from "react";
import { LoginContainer } from "./LoginContainer";
import FormInput from "../../../../components/ui/FormInput";
import AppButton from "../../../../components/ui/Button";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export interface LoginProps {}
const Login: FC<LoginProps> = () => {
  return (
    <LoginContainer
      maintitle={
        <>
          <span className="fw-normal">Welcome Back</span>
        </>
      }
      subtitle={
        <>
          Choose <span className="fw-normal">the</span> double Option{" "}
          <span className="fw-normal">and </span> Get Started
        </>
      }
      label={
        <>
          <span className="fw-bold">
            Are you ready to achieve your financial goals and grow wealth with
            our secure options for naria and dollar savings investments.
          </span>
        </>
      }
      testimony={
        <>
          <div>
            <h4
              className="text-secondary fw-lighter my-3"
              style={{ fontSize: "18px" }}
            >
              I can't believe how much peace of mind Doubble has given me. Thank
              you for helping me build a net and securing my financial future!.
            </h4>
            <h4 className="text-secondary fs-5">Stella O.</h4>
          </div>
        </>
      }
    >
      <div className="px-5">
        <FormInput type="email" placeholder="Email Address" />
        <FormInput type="password" placeholder="Password" />
        <div className="d-flex align-items-center justify-content-between">
          <Form.Check type="checkbox" id="custom-switch" label="Remember me" />
          <div className="text-primary">Forgot Password?</div>
        </div>
        <AppButton
          variant="info"
          size="lg"
          fullWidth
          className="mt-4"
          onClick={() => {}}
        >
          Login
        </AppButton>
        <div className="text-secondary mt-4 d-flex align-items-center justify-content-center">
          Don't have an account?{" "}
          <Link to={"/login"}>
            <span
              className="text-accent ms-1 fw-bold"
              style={{ textDecoration: "none !important" }}
            >
              Sign up
            </span>
          </Link>
        </div>
        <div className="text-secondary mt-4 d-flex flex-column mt-5 align-items-center justify-content-center">
          <div className="text-secondary">By signing up you agree to our</div>
          <div className="text-accent">
            Terms and Conditions <span className="text-secondary">and</span>{" "}
            Privacy Statement
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
