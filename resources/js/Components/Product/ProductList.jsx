const ProductList = (props) => {

    return (
        <>
        {/*Product table*/}
        <div className="flex flex-col">
            <div className="-mx-3 flex flex-col">
                <div className="w-full px-3">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-3 py-2">Name</th>
                                <th className="px-3 py-2">Slug</th>
                                <th className="px-3 py-2">Description</th>
                                <th className="px-3 py-2">Price</th>
                                <th className="px-3 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.products.map((product) => {
                                return (
                                    <tr key={product.id}>
                                        <td className="border px-4 py-1">{product.id}</td>
                                        <td className="border px-4 py-2">{product.name}</td>
                                        <td className="border px-4 py-2">{product.slug}</td>
                                        <td className="border px-4 py-2">{product.description}</td>
                                        <td className="border px-4 py-2">{product.price}</td>
                                        <td className="border px-4 py-2">
                                            <button onClick={() => props.deleteProduct(product.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>

    )
}

export default ProductList;
