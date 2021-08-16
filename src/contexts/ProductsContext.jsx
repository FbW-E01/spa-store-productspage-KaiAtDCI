import React, {useState, useContext, useReducer} from 'react';

export const ProductsContext = React.createContext(null);
export default ProductsContext;

function reducer(previousState, action) {
    const newState = { ...previousState }
    switch (action.type) {
        case 'addProduct':
            console.log('add product:');
            const id = Math.ceil(Math.random() * 1000000);
            action.product.id = id;
            console.log(action.product);
            newState.products.push(action.product);
            return newState;
        default:
            return previousState;
    }
}
export function ProductsContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, {products: [{id:1, name:"iPad", price:10}]});
    const context = {
        products: state.products,
        addProduct: product => dispatch({type: 'addProduct', product: product})
        // setProducts: products => dispatch({type: 'setProducts', products: products})
    };

    return (
        <ProductsContext.Provider value={context}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext);
}