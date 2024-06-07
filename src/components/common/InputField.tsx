import React from "react";
import { Form, FormControl, FormLabel, FormText } from "react-bootstrap";

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
}) => {
  return (
    <Form.Group controlId={name}>
      <FormLabel>{label}</FormLabel>
      <FormControl
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        isInvalid={!!error}
      />
      {error && <FormText className="text-danger">{error}</FormText>}
    </Form.Group>
  );
};

export default InputField;
