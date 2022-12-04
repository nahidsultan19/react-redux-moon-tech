import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { toggleBrand } from '../../redux/actionCreators/filterActions';

const Home = () => {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const activeClass = 'text-white bg-indigo-500 border-white'

    const state = useSelector(state => state);
    console.log(state);

    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className='mb-10 flex justify-end gap-5'>
                <button className={`border px-3 py-2 rounded-full font-semibold ${activeClass}`}>In Stock</button>
                <button onClick={() => dispatch(toggleBrand('amd'))} className={`border px-3 py-2 rounded-full font-semibold`}>AMD</button>
                <button onClick={() => dispatch(toggleBrand('intel'))} className={`border px-3 py-2 rounded-full font-semibold`}>Intel</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
                {
                    products.map(product => <ProductCard key={product._id} product={product} s />)
                }
            </div>
        </div>
    );
};

export default Home;