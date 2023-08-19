import GlobalStyles from './GlobalStyles';
import { AuthProvider } from './contexts/auth';
import RoutesApp from './routes/RoutesApp';

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
