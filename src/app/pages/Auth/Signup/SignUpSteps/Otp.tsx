import { FC, useState } from "react";
import { ISignUpStep } from "../../../../../utils/types";
import { SignUpContainer } from "../SignUpContainer";
import FormInput from "../../../../../components/ui/FormInput";
import AppButton from "../../../../../components/ui/Button";
import { Link } from "react-router-dom";

export interface OtpProps {
  setStep: React.Dispatch<React.SetStateAction<ISignUpStep>>;
}
const OTP: FC<OtpProps> = ({ setStep }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const proceedToWelcome = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setStep("welcome");
    }, 2000);
  };
  return (
    <>
      {showOverlay && (
        <div className="pl-overlay">
          <img src="/assets/please-wait.png" alt="Loading..." />
        </div>
      )}
      <SignUpContainer
        maintitle={
          <>
            Verify your <span className="fw-bold">Email!</span>
          </>
        }
        subtitle={<span>An OTP has been sent to your Email Address</span>}
        label="Enter the otp sent to the email address ********@gmail.com you provided"
      >
        <div style={{ width: "100%", maxWidth: "540px" }}>
          <FormInput type="text" placeholder="Enter OTP" />
          <AppButton
            variant="info"
            size="lg"
            fullWidth
            className="mt-4"
            onClick={proceedToWelcome}
          >
            Proceed
          </AppButton>
          <div className="text-secondary mt-4 d-flex align-items-center justify-content-center">
            Did'nt get OTP?{" "}
            <Link to={"/"}>
              <span
                className="text-accent ms-1 fw-bold"
                style={{ textDecoration: "none !important" }}
              >
                Resend
              </span>
            </Link>
          </div>
        </div>
      </SignUpContainer>
    </>
  );
};

export default OTP;
