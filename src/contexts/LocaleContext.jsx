import React, {useReducer} from "react";

const LocaleContext = React.createContext(null); 	// (1) Create context (null as default value)
export default LocaleContext;

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

export function LocaleContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, {locale: 'en-us'});
  const context = {
    locale: state.locale,
    setLocale: locale => dispatch({type: 'setLocale', locale: locale})
  };

  return (
    <LocaleContext.Provider value={context}>
      {props.children}
    </LocaleContext.Provider>
  )
}


// import React, { useState, useContext } from 'react';
//
// export const ProductsContext = React.createContext();
//
// export function ProductsContextProvider(props) {
//   const [products, setProducts] = useState([{id:1, name:"iPad", price:10}]);
//
//   return (
//     <ProductsContext.Provider value={[ products, setProducts ]}>
//       {props.children}
//     </ProductsContext.Provider>
//   )
// }
//
// export const useProductsContext = () => {
//   return useContext(ProductsContext);
// }