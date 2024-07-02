import { FC, useState } from "react";
import { ISignUpStep } from "../../../../utils/types";
import StartPage from "./SignUpSteps/StartPage";
import OTP from "./SignUpSteps/Otp";
import WelcomeOnBoard from "./SignUpSteps/Welcome";
import MoreInfo from "./SignUpSteps/MoreInfo";
import Bvn from "./SignUpSteps/Bvn";
import BvnVerify from "./SignUpSteps/BvnVerify";
import Security from "./SignUpSteps/Security";
import SecurityQn from "./SignUpSteps/SecurityQn";

export interface SignupProps {}
const Signup: FC<SignupProps> = () => {
  const [step, setStep] = useState<ISignUpStep>("start");
  return (
    <>
      {step === "start" && <StartPage setStep={setStep} />}
      {step === "otp" && <OTP setStep={setStep} />}
      {step === "welcome" && <WelcomeOnBoard setStep={setStep} />}
      {step === "moreInfo" && <MoreInfo setStep={setStep} />}
      {step === "bvn" && <Bvn setStep={setStep} />}
      {step === "bvnVerify" && <BvnVerify setStep={setStep} />}
      {step === "security" && <Security setStep={setStep} />}
      {step === "securityQn" && <SecurityQn setStep={setStep} />}
    </>
  );
};

export default Signup;
