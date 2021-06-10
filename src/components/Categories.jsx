import React, { useState } from "react";
import Category from "./Category";

function Categories({setCategory, data}) {
    const [categories,setCategories] = useState(  ["Todas", ...new Set(data.map((x) => x.category).flat())]  )
    console.log(categories)
    const [selectedCategory, setSelectedCategory] = useState(0);
    function selectCategory(i,cat) {
        setCategory(cat)
        setSelectedCategory(i)
    }
    return (
        <ul className="category-container">
        {
            categories.map((cat, i) => (
                    <Category key={i} name={cat}
                        index={i} setCat={selectCategory}
                        selectedIndex={selectedCategory} />
                
            ))
        }
        </ul>
    );
    }

export default Categories;
