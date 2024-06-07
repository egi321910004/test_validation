import FormInput from "../../components/common/Form";
import Header from "../../components/common/Header";

export default function index() {
  return (
    <div className="card p-4 mt-4" style={{ width: "60%", margin: "auto" }}>
      <Header title="Form Submission" />
      <FormInput />
    </div>
  );
}
