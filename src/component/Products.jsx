import React, {useState, useEffect} from "react";


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();

    }, []);

    const Lording = () => {
        return(
            <>
              Loading.....
            </>
        )
    }

    const ShowProducts = () => {
        return(
        <div className="buttons">
            <button className="btn btn-outline-dark">All</button>
            <button className="btn btn-outline-dark mx-2">Men</button>
            <button className="btn btn-outline-dark mx-2">Men2</button>
            <button className="btn btn-outline-dark mx-2">Men3</button>
            <button className="btn btn-outline-dark mx-2">Men4</button>

        </div>

        );
    };

    return(
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <loading/> : <ShowProducts/>}
                </div>
            </div>

        </div>
    );
}

export default Products;