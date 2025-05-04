export type ColorType = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
export type SignUpFormValues = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  phone: string,
}

export type BlogProps = {
  color: ColorType,
  image: string,
  title: string,
  author: string,
  date: string,
  tag: string,
  desc: string
}