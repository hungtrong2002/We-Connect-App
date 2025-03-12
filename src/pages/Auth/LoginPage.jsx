import FormField from "@components/FormField";
import TextInput from "@components/FormInputs/TextInput";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { control } = useForm();
  return (
    <div>
      <p className="mb-5 text-center text-2xl font-bold">Login</p>
      <form className="flex flex-col gap-4">
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
        <Button variant="contained">Sign in</Button>
      </form>
      <p className="mt-4 text-center">
        New on our platform? <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
};
export default LoginPage;
