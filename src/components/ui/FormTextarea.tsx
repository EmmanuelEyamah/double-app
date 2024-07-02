import { FC } from "react";
import { Form } from "react-bootstrap";

export interface FormInputProps {
  placeholder: string;
  rows: number;
}

const FormInput: FC<FormInputProps> = ({ placeholder, rows }) => {
  return (
    <Form>
      <Form.Control
        as="textarea"
        placeholder={placeholder}
        className="mb-4"
        rows={rows}
      />
    </Form>
  );
};

export default FormInput;
