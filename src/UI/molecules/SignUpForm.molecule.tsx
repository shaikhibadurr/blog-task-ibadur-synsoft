import { Box, Button, Stack, Typography } from '@mui/material'
import InputAtom from '../atoms/Input.atom'
import { useContext } from 'react'
import { SignUpContext } from '../contexts/contexts';
import TEXT from '../../utils/constants/text.constants';
import style from './style';

const SignUpForm = () => {
  const { navigateToSignIn } = useContext(SignUpContext);
  return (
    <Stack gap={3}>
      <InputAtom label={TEXT.FULL_NAME} placeholder={TEXT.JHON_DOE} fullWidth />
      <InputAtom label={TEXT.PHONE} placeholder={TEXT.PHONE_VALUE} type={'number'} fullWidth />
      <InputAtom label={TEXT.EMAIL} placeholder={TEXT.EMAIL_ID} fullWidth />
      <InputAtom label={TEXT.PASSWORD} placeholder={TEXT.PASSWORD_CODE} type={'password'} fullWidth />
      <InputAtom label={TEXT.CNF_PASSWORD} placeholder={TEXT.PASSWORD_CODE} type={'password'} fullWidth />
      <Button fullWidth variant="contained">{TEXT.SIGN_UP}</Button>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        {TEXT.ALREADY_ACCOUNT} &nbsp;
        <Box component={'span'} sx={style.textLink} onClick={navigateToSignIn}> {TEXT.SIGN_IN} </Box>
      </Typography>
    </Stack>
  )
}

export default SignUpForm