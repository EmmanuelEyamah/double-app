import { FC } from "react";
import { ISignUpStep } from "../../../../../utils/types";
import AppButton from "../../../../../components/ui/Button";
import FormInput from "../../../../../components/ui/FormInput";
import { SignUpContainer } from "../SignUpContainer";

export interface SecurityProps {
  setStep: React.Dispatch<React.SetStateAction<ISignUpStep>>;
}
const Security: FC<SecurityProps> = ({ setStep }) => {
  return (
    <SignUpContainer
      maintitle={
        <>
          <span className="fw-light">You're Almost there!</span>
        </>
      }
      subtitle={
        <>
          <span className="fw-normal">Setup your account</span> Security
        </>
      }
      label="Choose a username and transaction PIN for safe and easy access to your investment"
    >
      <div style={{ width: "540px" }}>
        <div className="row">
          <div className="col-md-6">
            <FormInput type="text" placeholder="@Username" />
          </div>
          <div className="col-md-6">
            <FormInput type="text" placeholder="Referral Code (Optional)" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormInput type="text" placeholder="4-digit Transaction PIN" />
          </div>
          <div className="col-md-6">
            <FormInput type="text" placeholder="Confirm PIN" />
          </div>
        </div>
        <AppButton
          variant="info"
          size="lg"
          fullWidth
          className="mt-4"
          onClick={() => setStep("securityQn")}
        >
          Proceed
        </AppButton>
        <div
          className="text-secondary text-center mt-4 fw-lighter"
          style={{ fontSize: "14px" }}
        >
          By Tapping on "Proceed", you agree to our{" "}
          <span className="fw-normal">Terms and Conditions</span> and
          <span className="fw-normal"> Privacy Policy</span>
        </div>
      </div>
    </SignUpContainer>
  );
};

export default Security;
