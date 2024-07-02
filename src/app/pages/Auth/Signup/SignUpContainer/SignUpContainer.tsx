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
      <div className="text-primary fs-2 fw-normal">{maintitle}</div>
      <Card
        className="bg-white rounded-5 border-0 mt-4 d-flex flex-row align-items-start"
        style={{ width: "1100px", height: "400px", padding: "40px" }}
      >
        <div style={{ width: "60%" }}>{children}</div>
        <div
          className="d-flex flex-column align-items-start justify-content-center"
          style={{ width: "40%" }}
        >
          <div className="text-primary fw-bold fs-3 mb-3">{subtitle}</div>
          <div className="text-secondary">{label}</div>
        </div>
      </Card>
    </div>
  );
};
