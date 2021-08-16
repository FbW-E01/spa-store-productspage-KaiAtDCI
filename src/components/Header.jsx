import ProductsContext, { useProductsContext } from '../contexts/ProductsContext';
import {useContext} from "react";

export default function Header() {
    const { products, setProducts } = useContext(ProductsContext)

    return (
        <header>
            <h1>Product manager</h1>
            <p>Now with {products.length} products</p>
        </header>
    )
}