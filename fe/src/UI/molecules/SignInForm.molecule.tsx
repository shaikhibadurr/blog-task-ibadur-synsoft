import { Box, Button, Stack, Typography } from '@mui/material'
import InputAtom from '../atoms/Input.atom'
import { useContext } from 'react'
import TEXT from '../../utils/constants/text.constants'
import style from './style'
import { emailValidation, passwordValidation } from '../../utils/form/validationSchema'
import { SignInContext } from '../pages/SignIn.page'

const SignInForm = () => {
  const { navigateToSignUp, control, handleSignIn,loading } = useContext(SignInContext)!

  return (
    <form noValidate onSubmit={handleSignIn}>
      <Stack gap={3}>
        <InputAtom rules={emailValidation} name={'email'} type={'email'} control={control} label={TEXT.EMAIL} placeholder={TEXT.EMAIL_ID} fullWidth />
        <InputAtom rules={passwordValidation} name={'password'} control={control} label={TEXT.PASSWORD} placeholder={TEXT.PASSWORD_CODE} type={'password'} fullWidth />
        <Button loading={loading} type='submit' fullWidth variant="contained">{TEXT.SIGN_IN}</Button>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          {TEXT.NO_ACCOUNT} &nbsp;
          <Box component={'span'} sx={style.textLink} onClick={navigateToSignUp}> {TEXT.SIGN_UP} </Box>
        </Typography>
      </Stack>
    </form>
  )
}

export default SignInForm