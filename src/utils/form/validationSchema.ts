import { SignUpFormValues } from "../../types/common";

export const emailValidation = {

  required: "Email is required",
  pattern: {
    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
    message: "Invalid email",
  },

}

export const passwordValidation = {
  required: "Password is required",
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters",
  },
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    message:
      "Password must include uppercase, lowercase, number, and special character",
  },
};

export const phoneRules = {
  required: "Phone number is required",
};

export const confirmPasswordValidation = (getValues: (name?: keyof SignUpFormValues) => SignUpFormValues | SignUpFormValues[keyof SignUpFormValues]) => {
  return {
    required: "Confirm password is required",
    validate: (value: string) =>
      value === getValues("password") || "Passwords do not match",
  }
}
