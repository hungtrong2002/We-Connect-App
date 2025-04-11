import FormField from "@components/FormField";
import TextInput from "@components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import { Alert, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "@services/rootApi";
const RegisterPage = () => {
  const { control, handleSubmit } = useForm();
  const [register, { data, isLoading, error, isError }] = useRegisterMutation();
  function onSubmit(formData) {
    console.log(formData);
    register(formData);
  }
  console.log({ data, isLoading, error });
  return (
    <div>
      <p className="mb-5 text-center text-2xl font-bold">Register</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
        <Button variant="contained" type="submit">
          Sign up
        </Button>
        {isError && <Alert severity="error">{error?.data?.message}</Alert>}
      </form>
      <p className="mt-4 text-center">
        Already have an account? <Link to="/login">Sign in instead</Link>
      </p>
    </div>
  );
};
export default RegisterPage;
