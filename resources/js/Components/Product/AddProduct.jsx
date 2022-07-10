const AddProduct = (props) => {
    return (
        <>
            {/*Form to add product with name, slug, description, price*/}
            <div className="flex flex-col">
                <div className="-mx-3 flex flex-col">
                    <div className="w-full px-3">
                        <form onSubmit={props.handleSubmit}>
                            <div className="flex flex-col">
                                <label className="block text-gray-700 text-sm font-bold mb-2"
                                       htmlFor="name">Name</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name" type="text" name="name" value={props.product.name}
                                    onChange={props.handleChange}/>
                            </div>
                            <div className="flex flex-col">
                                <label className="block text-gray-700 text-sm font-bold mb-2"
                                       htmlFor="slug">Slug</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="slug" type="text" name="slug" value={props.product.slug}
                                    onChange={props.handleChange}/>
                            </div>
                            <div className="flex flex-col">
                                <label className="block text-gray-700 text-sm font-bold mb-2"
                                       htmlFor="description">Description</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="description" type="text" name="description" value={props.product.description}
                                    onChange={props.handleChange}/>
                            </div>
                            <div className="flex flex-col">
                                <label className="block text-gray-700 text-sm font-bold mb-2"
                                       htmlFor="price">Price</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="price" type="text" name="price" value={props.product.price}
                                    onChange={props.handleChange}/>
                            </div>
                            <div className="flex flex-col m-5">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                                    type="submit">Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct;
