import './App.css'
import ThemeCustomisation from './theme/theme'
import Routing from './routing/routing'
import { AuthProvider } from './UI/contexts/contexts'

function App() {
  return (
    <AuthProvider>
      <ThemeCustomisation>
        <Routing />
      </ThemeCustomisation>
    </AuthProvider>
  )
}

export default App
