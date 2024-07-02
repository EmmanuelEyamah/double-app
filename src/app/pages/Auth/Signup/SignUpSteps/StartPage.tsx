import { FC } from "react";
import FormInput from "../../../../../components/ui/FormInput";
import AppButton from "../../../../../components/ui/Button";
import { Link } from "react-router-dom";
import { ISignUpStep } from "../../../../../utils/types";
import { SignUpContainer } from "../SignUpContainer";

export interface StartPageProps {
  setStep: React.Dispatch<React.SetStateAction<ISignUpStep>>;
}
const StartPage: FC<StartPageProps> = ({ setStep }) => {
  return (
    <SignUpContainer
      maintitle="Let's get you Started"
      subtitle={
        <>
          Choose <span className="fw-normal">the</span> double Option{" "}
          <span className="fw-normal">and </span> Get Started
        </>
      }
      label='"Enter your email address and create a secure password to begin your
            experience with us"'
    >
      <div style={{ width: "540px" }}>
        <FormInput type="email" placeholder="Email Address" />
        <FormInput type="password" placeholder="Create Password" />
        <FormInput type="password" placeholder="Confirm Password" />
        <AppButton
          variant="info"
          size="lg"
          fullWidth
          className="mt-4"
          onClick={() => setStep("otp")}
        >
          Proceed
        </AppButton>
        <div className="text-secondary mt-4 d-flex align-items-center justify-content-center">
          Returning User?{" "}
          <Link to={"/login"}>
            <span
              className="text-accent ms-1 fw-bold"
              style={{ textDecoration: "none !important" }}
            >
              Log in
            </span>
          </Link>
        </div>
      </div>
    </SignUpContainer>
  );
};

export default StartPage;
