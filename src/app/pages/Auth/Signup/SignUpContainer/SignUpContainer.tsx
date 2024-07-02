import { FC, ReactNode } from "react";
import { Card } from "react-bootstrap";

export interface SignUpContainerProps {
  children: ReactNode;
  maintitle: ReactNode | string;
  subtitle: ReactNode | string;
  label: ReactNode | string;
}
export const SignUpContainer: FC<SignUpContainerProps> = ({
  children,
  maintitle,
  subtitle,
  label,
}) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="text-primary fs-2 fw-normal text-center">{maintitle}</div>
      <Card
        className="bg-white rounded-5 border-0 mt-4"
        style={{
          maxWidth: "1100px",
          padding: "40px",
        }}
      >
        <div className="row g-5 flex-md-row flex-row-reverse">
          <div className="col-md-6 order-md-1 order-2">{children}</div>
          <div className="col-md-6 d-flex flex-column justify-content-start order-md-2 order-1">
            <div className="text-primary fw-bold fs-3 mb-3">{subtitle}</div>
            <div className="text-secondary">{label}</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
