import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, addToCart } from "../../../redux";

const serverUrl = "https://e-commerce-erc7.onrender.com";

const api = axios.create({
    baseURL: serverUrl
});


const Products = () => {
    const dispatch = useDispatch();
    const _products = useSelector((state) => state._products);
    const numberItems = useSelector((state) => state.numberItems);
    const [scroll, setScroll] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentOrder, setCurrentOrder] = useState("relevance_desc");
    const [searchTerm, setSearchTerm] = useState('');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleOrderChange = (order) => {
        setCurrentOrder(order);
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const filteredProducts = _products.filter(product =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.provider_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (currentOrder === "product_name_asc") {
        filteredProducts.sort((a, b) =>
            a.product_name.localeCompare(b.product_name)
        );
    } else if (currentOrder === "product_name_desc") {
        filteredProducts.sort((a, b) =>
            b.product_name.localeCompare(a.product_name)
        );
    } else if (currentOrder === "relevance_asc") {
        filteredProducts.sort((a, b) => a.relevance - b.relevance);
    } else if (currentOrder === "relevance_desc") {
        filteredProducts.sort((a, b) => b.relevance - a.relevance);
    } else if (currentOrder === "price_asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (currentOrder === "price_desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    const itemsPerPage = 10;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end);


    const detectScroll = () => {
        setScroll(window.pageYOffset);
    }

    let cart = document.getElementById("cartFixed");
    useEffect(() => {
        window.addEventListener('scroll', detectScroll)

        if (scroll > 100) {
            cart.style.position = "fixed";
        }
        else if (cart !== null) {
            cart.style.position = "inherit";
        }
        return () => {
            window.removeEventListener('scroll', detectScroll)
        }
        // eslint-disable-next-line
    }, [scroll]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get("/api/product");
                const data = await res.data;
                dispatch(getAllProducts(data))
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [dispatch])


    if (_products.length !== 0) {
        return (
            <div>
                <div id='text-and-filters'>
                    <input type="text" value={searchTerm} onChange={handleSearchTermChange} placeholder="Filter by name or brand" />
                    <div className="filters">
                    </div>
                    <label>
                        <select
                            value={currentOrder}
                            onChange={(e) => handleOrderChange(e.target.value)}
                        >
                            <option value="relevance_desc">Relevance High to Low</option>
                            <option value="relevance_asc">Relevance Low to High</option>
                            <option value="product_name_asc">Name A-Z</option>
                            <option value="product_name_desc">Name Z-A</option>
                            <option value="price_asc">Price Low to High</option>
                            <option value="price_desc">Price High to Low</option>
                        </select>
                    </label>
                </div>
                <div id='productCardContainer'>
                    {paginatedProducts.map((product, i) => (
                        <div className='productCard' key={i}>
                            <Link
                                to={{
                                    pathname: `/product/${product.product_name}`,
                                    state: { product }
                                }}
                            >
                                <Product product={product} />
                            </Link>
                            <button className='button' onClick={() => {
                                dispatch(addToCart(product))
                            }}>Add to cart</button>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button className='button--secondary'
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </button>
                    <button className='button--secondary'
                        disabled={end >= filteredProducts.length}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
                <Link id='cartFixed' to="/cart" title='Shopping cart'>
                    <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG4.png" alt="shopping cart" />
                    <span>{numberItems}</span>
                </Link>
            </div>
        )
    }
    else {
        return (
            <span className="loader"></span>

        )
    }
}


export default Products