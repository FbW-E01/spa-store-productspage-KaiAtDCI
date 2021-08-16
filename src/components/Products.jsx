import { useProductsContext } from '../contexts/ProductsContext';
import LocaleContext from "../contexts/LocaleContext";
import {useContext} from "react";

export default function Products() {

    const [ products ] = useProductsContext();
    const context = useContext(LocaleContext)

    function priceUnit() {
        switch (context.locale) {
            case 'en-us': return '$';
            case 'en-gb': return '£';
            case 'de-de': return '€';
        }
    }

    return (
        <div className="Products">
            {products.map(prod => <div>
                {prod.name}: {prod.price} {priceUnit()}
            </div>)}
        </div>
    )
}