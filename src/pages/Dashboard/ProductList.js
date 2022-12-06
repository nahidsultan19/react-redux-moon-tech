import React from 'react';

const ProductList = () => {
    return (
        <div className='flex flex-col justify-center items-center h-full w-full'>
            <div className='w-full max-w-7xl mx-auto rounted-lg bg-white shadow-lg border border-gray-200'>
                <header className='px-5 py-4 border-b border-gray-100'>
                    <div className='font-semibold text-gray-800'>Products</div>
                </header>
                <div className='overflow-x-auto p-3'>
                    <table className='table-auto w-full'>
                        <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                            <tr>
                                <th></th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Product Name</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Brand</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>In Stock</div>
                                </th>
                                <th>
                                    <div className='font-semibold text-left'>Price</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-center'>Action</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-sm divide-y divide-gray-100'></tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ProductList;