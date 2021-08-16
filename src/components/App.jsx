import Header from './Header'
import CreateProduct from './CreateProduct'
import Products from './Products'
import { ProductsContextProvider } from '../contexts/ProductsContext'
import LocaleContext from "../contexts/LocaleContext";
import {useReducer, useState} from "react";
import LocaleSetter from "./LocaleSetter";

function reducer(previousState, action) {
  const newState = { ...previousState }
  switch (action.type) {
    case 'setLocale':
      console.log('reducer| set locale')
      newState.locale = action.locale;
      return newState;
    default:
      return previousState;
  }
}

export default function App() {

  const [state, dispatch] = useReducer(reducer, {locale: 'en-us'});
  const context = {
    locale: state.locale,
    setLocale: locale => dispatch({type: 'setLocale', locale: locale})
  };


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