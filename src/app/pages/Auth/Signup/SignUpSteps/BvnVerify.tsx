import { FC, useState } from "react";
import { ISignUpStep } from "../../../../../utils/types";
import { SignUpContainer } from "../SignUpContainer";
import FormInput from "../../../../../components/ui/FormInput";
import AppButton from "../../../../../components/ui/Button";

export interface BvnVerifyProps {
  setStep: React.Dispatch<React.SetStateAction<ISignUpStep>>;
}
const BvnVerify: FC<BvnVerifyProps> = ({ setStep }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const proceedToNext = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setStep("security");
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
            Validate your <span className="fw-bold">BVN</span>
          </>
        }
        subtitle="An OTP has been sent to your Phone Number"
        label="Enter the otp sent to your {******1150} or email address *******@gmail.com connected to your BVN"
      >
        <div style={{ width: "540px" }}>
          <FormInput type="password" placeholder="Enter OTP" />
          <AppButton
            variant="info"
            size="lg"
            fullWidth
            className="mt-4"
            onClick={proceedToNext}
          >
            Proceed
          </AppButton>
          <div className="text-secondary mt-4 text-center">
            Did'nt get OTP? <span className="text-primary fw-bold">Resend</span>
          </div>
        </div>
      </SignUpContainer>
    </>
  );
};

export default BvnVerify;
