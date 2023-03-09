import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const serverUrl = "https://e-commerce-erc7.onrender.com";

const api = axios.create({
    baseURL: serverUrl
});

const Details = () => {
    const { product_name } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get(`/api/provider/${product_name}`);
                const data = await res.data;
                setProduct(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [setProduct, product_name])

    return (
        <div className="details-container">
            <button className='button--secondary' onClick={() => navigate(-1)}>Back</button>
            {product ?
                <div className="product-container">
                    <h3>{product.product.product_name
                        .split(' ')
                        .slice(0, 5)
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                        .join(' ')
                    }</h3>
                    <h4>{product.product.relevance} ⭐</h4>
                    <img src={product.product.image} alt={product.product.product_name} />
                    <h5>{product.product.price} $</h5>
                    <h4>{`${product.provider.provider_name}, ${product.provider.CIF}`}</h4>
                    <h4>{product.provider.address}</h4>
                </div>

                : null}
        </div>
    );
}

export default Details;



