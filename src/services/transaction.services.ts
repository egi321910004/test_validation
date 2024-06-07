import axios from "axios";

const API_URL = "http://localhost:3001/";

export const postData = async (data: {
  name: string;
  identity_number: string;
  email: string;
  date_of_birth: string;
}) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while submitting the form."
    );
  }
};
