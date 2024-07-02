import { FC, useState } from "react";
import { ISignUpStep } from "../../../../../utils/types";
import AppButton from "../../../../../components/ui/Button";
import { SignUpContainer } from "../SignUpContainer";
import { Accordion } from "react-bootstrap";
import FormInput from "../../../../../components/ui/FormInput";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../../../../utils/routeNames";

export interface SecurityQnProps {
  setStep: React.Dispatch<React.SetStateAction<ISignUpStep>>;
}
const SecurityQn: FC<SecurityQnProps> = () => {
  const navigate = useNavigate();

  const [showOverlay, setShowOverlay] = useState(false);

  const proceedTologin = () => {
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
        <div style={{ width: "540px" }}>
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className="mb-3">
                <Accordion.Header>
                  What the name of your favourite pet?
                </Accordion.Header>
                <Accordion.Body>
                  <FormInput type="text" placeholder="nikky" />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mb-3">
                <Accordion.Header>
                  What the name of your Mother maiden name?
                </Accordion.Header>
                <Accordion.Body>
                  <FormInput type="text" placeholder="patience" />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What town were you born?</Accordion.Header>
                <Accordion.Body>
                  <FormInput type="text" placeholder="kubwa" />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <AppButton
            variant="info"
            size="lg"
            fullWidth
            className="mt-4"
            onClick={proceedTologin}
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
    </>
  );
};

export default SecurityQn;
