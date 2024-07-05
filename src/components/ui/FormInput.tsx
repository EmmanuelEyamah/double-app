import { ChangeEvent, FC } from "react";
import { Form } from "react-bootstrap";

export interface FormInputProps {
  type: "text" | "email" | "password";
  placeholder: string;
  onChange?: (value: string) => void;
}

const FormInput: FC<FormInputProps> = ({ type, placeholder, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <Form>
      <Form.Control
        size="lg"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className="mb-4"
      />
    </Form>
  );
};

export default FormInput;
