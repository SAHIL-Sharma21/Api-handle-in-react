//here we are making custom react query method/ hook
import { useState, useEffect } from "react";
import axios from "axios";

const customReactQuery = (path) => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        ; (async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await axios.get(path);
                setProducts(response.data);
                setLoading(false);

            } catch (error) {
                setError(true);
                setLoading(false);
            }
        })();

    }, []);
    return { products, error, loading }
}

export default customReactQuery;