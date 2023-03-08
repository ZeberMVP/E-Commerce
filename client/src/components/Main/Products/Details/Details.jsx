import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const serverUrl = process.env.SERVER_URL || 'http://localhost:5000';

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
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [setProduct, product_name])

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            {product ?
                <div>
                    <h3>{product.product.product_name}</h3>
                    <h4>{product.product.relevance} ⭐</h4>
                    <img src={product.product.image} alt={product.product.product_name} />
                    <h5>{product.product.price} $</h5>
                    <h4>{product.provider.provider_name}</h4>
                    <h4>{product.provider.CIF}</h4>
                    <h4>{product.provider.address}</h4>
                </div>

                : null}

            {/* Agrega más información de productos aquí si es necesario */}
        </div>
    );
}

export default Details;


