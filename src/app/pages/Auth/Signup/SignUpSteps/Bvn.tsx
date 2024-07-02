import { FC } from "react";
import { ISignUpStep } from "../../../../../utils/types";
import FormInput from "../../../../../components/ui/FormInput";
import AppButton from "../../../../../components/ui/Button";
import { SignUpContainer } from "../SignUpContainer";

export interface BvnProps {
  setStep: React.Dispatch<React.SetStateAction<ISignUpStep>>;
}
const Bvn: FC<BvnProps> = ({ setStep }) => {
  return (
    <SignUpContainer
      maintitle={
        <>
          Verify your <span className="fw-bold">Identity</span>
        </>
      }
      subtitle={
        <>
          Provide <span className="fw-normal">your BVN</span>
        </>
      }
      label="Providing your BVN will help us verify your full name, phone number and date of birth."
    >
      <div style={{ width: "100%", maxWidth: "540px" }}>
        <FormInput type="password" placeholder="BVN" />
        <AppButton
          variant="info"
          size="lg"
          fullWidth
          className="mt-4"
          onClick={() => setStep("bvnVerify")}
        >
          Proceed
        </AppButton>
        <div className="text-secondary mt-4 text-center">
          Forget BVN? <span className="text-primary fw-bold">dial *565*0#</span>
        </div>
      </div>
    </SignUpContainer>
  );
};

export default Bvn;
