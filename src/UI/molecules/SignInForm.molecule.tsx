import { Box, Button, Stack, Typography } from '@mui/material'
import InputAtom from '../atoms/Input.atom'
import { useContext } from 'react'
import SignInContext from '../contexts/signInContext';
import TEXT from '../../utils/constants/text.constants';
import style from './style';

const SignInForm = () => {
  const {navigateToSignUp} = useContext(SignInContext);
  return (
    <Stack gap={3}>
      <InputAtom label={TEXT.EMAIL} placeholder={TEXT.EMAIL_ID} fullWidth />
      <InputAtom label={TEXT.PASSWORD} placeholder={TEXT.ENTER_PASSWORD} fullWidth />
      <Button fullWidth variant="contained">{TEXT.SIGN_IN}</Button>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        {TEXT.NO_ACCOUNT} &nbsp;
        <Box component={'span'} sx={style.textLink} onClick={navigateToSignUp}> {TEXT.SIGN_UP} </Box>
      </Typography>
    </Stack>
  )
}

export default SignInForm