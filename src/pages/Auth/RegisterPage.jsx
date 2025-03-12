import FormField from "@components/FormField";
import TextInput from "@components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const { control } = useForm();
  return (
    <div>
      <p className="mb-5 text-center text-2xl font-bold">Register</p>
      <form className="flex flex-col gap-4">
        <FormField
          name="fullName"
          label="Full Name"
          control={control}
          Component={TextInput}
          placeholder="john.doe"
        />
        <FormField
          name="email"
          label="Email"
          control={control}
          Component={TextInput}
          placeholder="john.doe@gmail.com"
        />
        <FormField
          name="password"
          label="Password"
          control={control}
          type="password"
          Component={TextInput}
          placeholder="..................... "
        />
        <Button variant="contained">Sign up</Button>
      </form>
      <p className="mt-4 text-center">
        Already have an account? <Link to="/login">Sign in instead</Link>
      </p>
    </div>
  );
};
export default RegisterPage;
