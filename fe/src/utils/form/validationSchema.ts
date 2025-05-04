
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
}

export const phoneRules = {
  required: "Phone number is required",
}

export const confirmPasswordValidation = (password: string) => ({
  required: "Confirm password is required",
  validate: (value?: string) => {
    if (value === undefined) return "Confirm password is required";
    return value === password || "Passwords do not match";
  }
})

export const fullNameValidation = {
  required: "Full name is required",
  validate: (value: string) => {
    if (value.trim() === "") {
      return "Full name cannot be empty or just spaces";
    }
    return true;
  }
};

