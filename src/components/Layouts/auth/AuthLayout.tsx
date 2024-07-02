import { FC, ReactNode } from "react";
import { AuthHeader } from "./AuthHeader";
import { AuthFooter } from "./AuthFooter";

export interface AuthLayoutProps {
  children: ReactNode;
}
export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="bg-img-container">
      <div className="overlay"></div>
      <AuthHeader />
      <div className="content">{children}</div>
      <AuthFooter />
    </div>
  );
};
