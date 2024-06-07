import React, { useState } from "react";
import InputField from "./InputField";
import { Form, Button } from "react-bootstrap";
import { postData } from "../../services/transaction.services";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  identity_number: string;
  email: string;
  date_of_birth: string;
}

const FormInput: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    identity_number: "",
    email: "",
    date_of_birth: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    let tempErrors: Partial<FormData> = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.length < 3) {
      tempErrors.name = "Name must be at least 3 characters long";
      isValid = false;
    }

    if (!formData.identity_number) {
      tempErrors.identity_number = "Identity Number is required";
      isValid = false;
    } else if (formData.identity_number.length !== 10) {
      tempErrors.identity_number = "Identity Number must be 10 characters long";
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.date_of_birth) {
      tempErrors.date_of_birth = "Date of Birth is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await postData(formData);
        Swal.fire({
          title: "Success!",
          text: "Form submitted successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Failed to submit form",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        error={errors.name as string}
      />
      <InputField
        label="Identity Number"
        name="identity_number"
        type="text"
        value={formData.identity_number}
        onChange={handleChange}
        error={errors.identity_number as string}
      />
      <InputField
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email as string}
      />
      <InputField
        label="Date of Birth"
        name="date_of_birth"
        type="date"
        value={formData.date_of_birth}
        onChange={handleChange}
        error={errors.date_of_birth as string}
      />
      <div className="mt-3 text-end">
        <Button variant="success" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default FormInput;
