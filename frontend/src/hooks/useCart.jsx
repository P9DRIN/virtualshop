import { useContext } from 'react';
import { CartContext } from '../contexts/cart';

const useCart = () => {
        const context = useContext(CartContext);

        return context;
}
export default useCart;