import { loadProduct } from "../../actionCreators/productActions";

export const loadProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('products.json');
        const data = await res.json();


        if (data.length) {
            dispatch(loadProduct(data))
        }
    };
};