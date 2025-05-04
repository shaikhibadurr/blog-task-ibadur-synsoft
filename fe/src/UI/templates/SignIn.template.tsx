import { Box, Stack, Typography } from "@mui/material"
import SignInForm from "../molecules/SignInForm.molecule"
import style from "./style"
import TEXT from "../../utils/constants/text.constants"

const SignInTemplate = () => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'} sx={style.fullHeight}>
      <Box sx={style.signInBox}>
        <Typography variant="h6" sx={style.loraFont}>{TEXT.WELCOME}</Typography>
        <Typography variant="body2" mt={0.75}>{TEXT.SIGN_IN_DESC}</Typography>
        <Box sx={style.my3}> <SignInForm /> </Box>
      </Box>
    </Stack>
  )
}

export default SignInTemplate