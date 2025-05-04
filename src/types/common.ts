export type ColorType = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
export type SignUpFormValues = {
  name?: string,
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
};