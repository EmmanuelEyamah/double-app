import { FC } from "react";
import { ISignUpStep } from "../../../../../utils/types";
import { SignUpContainer } from "../SignUpContainer";
import AppButton from "../../../../../components/ui/Button";

export interface WelcomeProps {
  setStep: React.Dispatch<React.SetStateAction<ISignUpStep>>;
}
const WelcomeOnBoard: FC<WelcomeProps> = ({ setStep }) => {
  return (
    <SignUpContainer
      maintitle="Welcome onboard!"
      subtitle="Here's what one of our users has to say:"
      label={
        <div>
          <h4 className="text-secondary fw-lighter fs-5">
            I can't believe how much peace of mind Doubble has given me. Thank
            you for helping me build a net and securing my financial future!.
          </h4>
          <h4 className="text-secondary fs-5">Stella O.</h4>
        </div>
      }
    >
      <div style={{ width: "100%", maxWidth: "540px" }}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="success-img-box">
            <img src="/assets/check.png" alt="Loading..." />
          </div>
          <div
            className="text-primary text-center mb-3 text-center"
            style={{ width: "200px" }}
          >
            Your email has been successfully verified.
          </div>
          <div className="text-secondary fw-lighter text-center">
            Click "Proceed" to begin your investment journey
          </div>
        </div>
        <AppButton
          variant="info"
          size="lg"
          fullWidth
          className="mt-4"
          onClick={() => setStep("moreInfo")}
        >
          Proceed
        </AppButton>
      </div>
    </SignUpContainer>
  );
};

export default WelcomeOnBoard;
