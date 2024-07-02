import { FC, ReactNode } from "react";
import { Card } from "react-bootstrap";

export interface LoginContainerProps {
  children: ReactNode;
  maintitle: ReactNode | string;
  subtitle: ReactNode | string;
  label: ReactNode | string;
  testimony: ReactNode | string;
}
export const LoginContainer: FC<LoginContainerProps> = ({
  children,
  maintitle,
  subtitle,
  label,
  testimony,
}) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="text-primary fs-2 fw-normal">{maintitle}</div>
      <Card
        className="bg-white rounded-5 border-0 mt-4"
        style={{
          maxWidth: "1100px",
          width: "100%",
          padding: "40px",
        }}
      >
        <div className="row g-4 flex-md-row-reverse">
          <div className="col-md-6 order-md-1">{children}</div>
          <div className="col-md-6 d-none d-md-flex flex-column justify-content-start order-md-2">
            <div className="text-primary fw-bold fs-3 mb-3">{subtitle}</div>
            <div className="text-secondary">{label}</div>
            <div className="text-secondary">{testimony}</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
