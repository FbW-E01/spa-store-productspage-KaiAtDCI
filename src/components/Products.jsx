import { useProductsContext } from '../contexts/ProductsContext';
import LocaleContext from "../contexts/LocaleContext";
import {useContext} from "react";

export default function Products() {
    const [ products ] = useProductsContext();
    const context = useContext(LocaleContext)

    return (
        <div className="Products">
            {products.map(prod => <div>
                {prod.name}: {prod.price} {context.language}
            </div>)}
        </div>
    )
}