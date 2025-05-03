import { Box, InputLabel, TextField } from "@mui/material"
import type { TextFieldProps } from "@mui/material/TextField"
import style from "./style";

type InputAtomProps = {
  label: string;
} & TextFieldProps;

const InputAtom: React.FC<InputAtomProps> = ({ label, ...rest }) => {
  
  // Generates unique id
  const id = Date.now().toString()

  return (
    <Box>
      <InputLabel htmlFor={id} sx={style.inputLabel}>{label}</InputLabel>
      <TextField id={id} variant="outlined" size="small" {...rest} />
    </Box>
  )
}

export default InputAtom