import { FC } from "react";
import { ISignUpStep } from "../../../../../utils/types";
import { SignUpContainer } from "../SignUpContainer";
import FormInput from "../../../../../components/ui/FormInput";
import AppButton from "../../../../../components/ui/Button";

export interface MoreInfoProps {
  setStep: React.Dispatch<React.SetStateAction<ISignUpStep>>;
}
const MoreInfo: FC<MoreInfoProps> = ({ setStep }) => {
  return (
    <SignUpContainer
      maintitle={
        <>
          Let's Get to know <span className="fw-bold">You!</span>
        </>
      }
      subtitle={
        <>
          <span className="fw-normal">Provide your</span> basic information to
          begin <span className="fw-normal">your</span> investment{" "}
          <span className="fw-normal">journey</span>
        </>
      }
      label="Kindly ensure that the details you provide match those on your BVN"
    >
      <div style={{ width: "100%", maxWidth: "540px" }}>
        <div className="row">
          <div className="col-md-6">
            <FormInput type="text" placeholder="First Name" />
          </div>
          <div className="col-md-6">
            <FormInput type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormInput type="text" placeholder="Gender" />
          </div>
          <div className="col-md-6">
            <FormInput type="text" placeholder="Date of Birth" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <FormInput type="text" placeholder="Phone Number" />
          </div>
        </div>

        <AppButton
          variant="info"
          size="lg"
          fullWidth
          className="mt-4"
          onClick={() => setStep("bvn")}
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

export default MoreInfo;
