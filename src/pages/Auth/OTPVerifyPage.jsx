import FormField from "@components/FormField";
import TextInput from "@components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import OTPInput from "@components/FormInputs/OTPInput";
const OTPVerifyPage = () => {
  const { control } = useForm();
  return (
    <div>
      <p className="mb-5 text-center text-2xl font-bold">
        Two-Step Verification
      </p>
      <form className="flex flex-col gap-4">
        <FormField
          name="otp"
          label="Type your 6 digit security code"
          control={control}
          type="password"
          Component={OTPInput}
          placeholder="..................... "
        />
        <Button variant="contained">Verify my account</Button>
      </form>
      <p className="mt-4 text-center">
        Didn&apos;t get the code? <Link to="/login">Resend</Link>
      </p>
    </div>
  );
};
export default OTPVerifyPage;
