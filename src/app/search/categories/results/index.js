import React from 'react'
import Results from './categories-results';

function CategoriesResults(props) {

    console.log("[CategoriesResults] props:", props);

    const { categories } = props;
    if (categories == null || categories.length < 1) {
        return null;
    }


    return (
        <div className="categories-results">
             <Results categories={categories} />
         </div>
    )


}
export default CategoriesResults;