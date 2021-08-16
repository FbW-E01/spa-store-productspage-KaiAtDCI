import {useContext, useState} from "react";
import { useProductsContext } from '../contexts/ProductsContext';
import LocaleContext from "../contexts/LocaleContext";

export default function Products() {

    const context = useProductsContext();
    const localeContext = useContext(LocaleContext)

    const [criteria, setCriteria] = useState('price');

    function priceUnit() {
        switch (localeContext.locale) {
            case 'en-us': return '$';
            case 'en-gb': return '£';
            case 'de-de': return '€';
        }
    }

    const collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base'
    });

    return (
        <div className="Products">
            <select name="sort"
                    id="sort"
                    value={criteria}
                    onChange={event => setCriteria(event.target.value)}>
                <option value="price">price</option>
                <option value="name">name</option>
            </select>

            {
                criteria === 'price'
                  ? context.products.sort((a, b) => a.price - b.price).map((prod, id) =>
                        <div key={id}>{prod.name}: {prod.price} {priceUnit()}</div>)
                  : context.products.sort((a, b) => {
                      return collator.compare(a.name, b.name)
                  }).map((prod, id) =>
                    <div key={id}>{prod.name}: {prod.price} {priceUnit()}</div>)
            }
        </div>
    )
}