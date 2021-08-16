import Header from './Header'
import CreateProduct from './CreateProduct'
import Products from './Products'
import { ProductsContextProvider } from '../contexts/ProductsContext'
import { LocaleContextProvider } from "../contexts/LocaleContext";
import LocaleSetter from "./LocaleSetter";

export default function App() {
    return (
      <div>
        <LocaleContextProvider>
          <LocaleSetter/>
          <ProductsContextProvider>
            <Header/>
            <CreateProduct/>
            <Products/>
          </ProductsContextProvider>
        </LocaleContextProvider>
      </div>
    )
}