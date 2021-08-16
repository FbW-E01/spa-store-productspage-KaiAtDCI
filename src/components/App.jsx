import Header from './Header'
import CreateProduct from './CreateProduct'
import Products from './Products'
import { ProductsContextProvider } from '../contexts/ProductsContext'
import LocaleContext from "../contexts/LocaleContext";
import {useState} from "react";
import LocaleSetter from "./LocaleSetter";

export default function App() {

    const [language, setLanguage] = useState('en-us');
    const context = { language, setLanguage };

    return (
      <div>
        <LocaleContext.Provider value={context}>
          <LocaleSetter/>
          <ProductsContextProvider>
            <Header/>
            <CreateProduct/>
            <Products/>
          </ProductsContextProvider>
        </LocaleContext.Provider>
      </div>
    )
}