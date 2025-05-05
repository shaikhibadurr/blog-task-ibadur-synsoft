import { Box, Stack, Typography } from "@mui/material"
import style from "./style"
import TEXT from "../../utils/constants/text.constants"
import SignUpForm from "../molecules/SignUpForm.molecule"

const SignUpTemplate = () => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'} sx={style.fullHeight}>
      <Box sx={style.signInBox}>
        <Typography variant="h6" sx={style.loraFont}>{TEXT.SIGN_UP}</Typography>
        <Typography variant="body2" mt={0.75}>{TEXT.SIGN_UP_DESC}</Typography>
        <Box sx={style.my3}> <SignUpForm /> </Box>
      </Box>
    </Stack>
  )
}

export default SignUpTemplate