import { FC, useState } from "react";
import { ISignUpStep } from "../../../../../utils/types";
import { SignUpContainer } from "../SignUpContainer";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../../../../utils/routeNames";
import CustomAccordion from "../../../../../components/ui/Accordian";

export interface SecurityQnProps {
  setStep: React.Dispatch<React.SetStateAction<ISignUpStep>>;
}
const SecurityQn: FC<SecurityQnProps> = () => {
  const navigate = useNavigate();

  const [showOverlay, setShowOverlay] = useState(false);
  const questions = [
    { id: 0, question: "What is the name of your favourite pet?" },
    { id: 1, question: "What is the name of your Mother's maiden name?" },
    { id: 2, question: "What town were you born in?" },
  ];

  const proceedToLogin = (
    answers: { questionId: number; answer: string }[]
  ) => {
    console.log("answers:", answers);
    setShowOverlay(true);
    setTimeout(() => {
      navigate(routeNames.login);
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
            <span className="fw-light">
              Here's mores security for your account!
            </span>
          </>
        }
        subtitle="Set your Security Question"
        label="Security Question add extra layer of protection to your account"
      >
        <div style={{ width: "100%", maxWidth: "540px" }}>
          <CustomAccordion questions={questions} onProceed={proceedToLogin} />
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
    </>
  );
};

export default SecurityQn;
