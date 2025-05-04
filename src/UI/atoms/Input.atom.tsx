import { Box, InputLabel, TextField } from "@mui/material"
import type { TextFieldProps } from "@mui/material/TextField"
import { Control, Controller, FieldValues, Path, RegisterOptions } from "react-hook-form"
import style from "./style"

type InputAtomProps<T extends FieldValues> = {
  label: string
  name: Path<T>
  control: Control<T>
  rules?: Omit<RegisterOptions<T, Path<T>>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate">
} & TextFieldProps

const InputAtom = <T extends FieldValues>(props: InputAtomProps<T>) => {
  const { label, name, control,rules, ...rest } = props

  // Generates unique id
  const id = Date.now().toString()

  return (
    <Box>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => {
          return (
            <>
              <InputLabel htmlFor={id} sx={style.inputLabel}>{label}</InputLabel>
              <TextField {...field} id={id} variant="outlined" size="small"
                error={fieldState.invalid}
                helperText={fieldState.error?.message} {...rest} />

            </>
          )
        }}
      />
    </Box>
  )
}

export default InputAtom