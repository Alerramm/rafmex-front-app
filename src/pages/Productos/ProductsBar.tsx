import React, { useEffect, useState } from 'react';

const ProductsBar = (props:any) => {
    const { allProducts, changeLocation, producto } = props;
    return(
        <div className="bg0 m-t-23">
            <div className="container">
                <div className="row">
                    <div className="flex-w flex-sb-m p-b-52">
                        <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                            {allProducts.length !== 0 && (
                                allProducts.map((item:any) => {
                                    return (
                                        <button key={item.img_url} name={item.img_url} onClick={() => changeLocation(item.title,item.img_url)} className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" >
                                            {producto !== item.title ? item.title : ''}
                                        </button>
                                    )
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductsBar;