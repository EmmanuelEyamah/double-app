import { FC } from "react";
import { Container } from "react-bootstrap";

export interface AuthFooterProps {}
export const AuthFooter: FC<AuthFooterProps> = () => {
  return (
    <Container className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4">
      <div className="text-primary mb-3 mb-sm-0 text-center">
        Copyright 2024. Sterling Bank Ltd. All rights reserved
      </div>
      <div className="text-primary">
        Licensed by the Central Bank Of Nigeria
      </div>
    </Container>
  );
};
