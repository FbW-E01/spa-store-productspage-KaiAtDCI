import {useContext, useState} from 'react'
import ProductsContext, { useProductsContext } from '../contexts/ProductsContext'

export default function CreateProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const { products, addProduct } = useContext(ProductsContext)


  function createProduct() {
        const id = Math.floor(Math.random() * 99999999999);
        addProduct({ name, price });
    }

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
            <button onClick={createProduct}>Add product!</button>
        </div>
    )
}