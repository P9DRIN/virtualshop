import GlobalStyles from './GlobalStyles';
import { AuthProvider } from './contexts/auth';
import { CartProvider } from './contexts/cart';
import RoutesApp from './routes/RoutesApp';

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
        <RoutesApp/>
        <GlobalStyles/>
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App
