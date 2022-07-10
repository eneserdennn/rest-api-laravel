import React, {useState, useEffect} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head} from '@inertiajs/inertia-react';
import axios from 'axios';
import ProductList from "@/Components/Product/ProductList";
import AddProduct from "@/Components/Product/AddProduct";

const Dashboard = (props) => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({
        name: '',
        slug: '',
        description: '',
        price: '',
    });

    const showProducts = async () => {
        const response = await axios.get('/api/products');
        setProducts(response.data);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`/api/products/${id}`);
        showProducts();
    }

    const handleChange = (e) => {
        const newproduct = {...product};
        newproduct[e.target.name] = e.target.value;
        setProduct(newproduct);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/products', {
                name: product.name,
                slug: product.slug,
                description: product.description,
                price: product.price,
            }).then(response => {
                showProducts();
                setProduct({
                    name: '',
                    slug: '',
                    description: '',
                    price: '',
                    image_path: '',
                });
            }
        ).catch(error => {
            console.log(error);
        })};



    useEffect(() => {
        showProducts().then(() => {
        })
    }, []);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>
            <div className="flex flex-col ">
            <div className="flex-fill">
                <div className="m-5 p-5">
                    <AddProduct product={product} handleChange={handleChange} handleSubmit={handleSubmit}/>
                </div>
                <div className="m-5 p-5">
                    <ProductList products={products} showProducts={showProducts} deleteProduct={deleteProduct} />
                </div>
            </div>
            </div>
        </Authenticated>
    );
}

export default Dashboard;
