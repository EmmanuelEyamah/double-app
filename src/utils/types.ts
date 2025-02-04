export type IButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export type ISignUpStep =
  | "start"
  | "otp"
  | "welcome"
  | "moreInfo"
  | "bvn"
  | "bvnVerify"
  | "security"
  | "securityQn";

export interface Question {
  id: number;
  question: string;
  answer: string;
}
