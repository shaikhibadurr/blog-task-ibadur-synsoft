import { Button, Typography } from '@mui/material'
import './App.css'
import ThemeCustomisation from './theme/theme'

function App() {
  return (
    <ThemeCustomisation>
      <Typography color='primary' variant="h3">App is Running</Typography>
    </ThemeCustomisation>
  )
}

export default App
