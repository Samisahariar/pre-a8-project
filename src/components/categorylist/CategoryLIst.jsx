import { useEffect, useState } from "react";

const CategoryLIst = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        
        <div className="text-center">
            <h3 className="text-4xl font-bold">job category list : {categories.length}</h3>
            <p>some-category list is down below</p>
        </div>
    );
};

export default CategoryLIst;