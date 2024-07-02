import { FC } from "react";
import { Form } from "react-bootstrap";

export interface FormInputProps {
  type: "text" | "email" | "password";
  placeholder: string;
}

const FormInput: FC<FormInputProps> = ({ type, placeholder }) => {
  return (
    <Form>
      <Form.Control
        size="lg"
        type={type}
        placeholder={placeholder}
        className="mb-4"
      />
    </Form>
  );
};

export default FormInput;
