import GlobalStyles from './GlobalStyles';
import RoutesApp from './routes/RoutesApp';
import { AuthProvider } from './contexts/auth';
function App() {
  return (
    <>
      <AuthProvider>
      <RoutesApp/>
      <GlobalStyles/>
      </AuthProvider>
    </>
  )
}

export default App
