import { Box, Button, Stack, Typography } from '@mui/material'
import InputAtom from '../atoms/Input.atom'
import { useContext } from 'react'
import { SignUpContext } from '../contexts/contexts';
import TEXT from '../../utils/constants/text.constants';
import style from './style';
import { confirmPasswordValidation, emailValidation, passwordValidation, phoneRules } from '../../utils/form/validationSchema';

const SignUpForm = () => {
  const { navigateToSignIn, control, handleSignIn, getValues } = useContext(SignUpContext);
  return (
    <form noValidate onSubmit={handleSignIn}>
      <Stack gap={3}>
        <InputAtom control={control} name={'name'} label={TEXT.FULL_NAME} placeholder={TEXT.JHON_DOE} fullWidth />
        <InputAtom rules={phoneRules} control={control} name={'phone'} label={TEXT.PHONE} placeholder={TEXT.PHONE_VALUE} type={'number'} fullWidth />
        <InputAtom rules={emailValidation} control={control} name={'email'} label={TEXT.EMAIL} placeholder={TEXT.EMAIL_ID} fullWidth />
        <InputAtom rules={passwordValidation} control={control} name={'password'} label={TEXT.PASSWORD} placeholder={TEXT.PASSWORD_CODE} type={'password'} fullWidth />
        <InputAtom rules={confirmPasswordValidation(getValues)} control={control} name={'confirmPassword'} label={TEXT.CNF_PASSWORD} placeholder={TEXT.PASSWORD_CODE} type={'password'} fullWidth />
        <Button type='submit' fullWidth variant="contained">{TEXT.SIGN_UP}</Button>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          {TEXT.ALREADY_ACCOUNT} &nbsp;
          <Box component={'span'} sx={style.textLink} onClick={navigateToSignIn}> {TEXT.SIGN_IN} </Box>
        </Typography>
      </Stack>
    </form>
  )
}

export default SignUpForm