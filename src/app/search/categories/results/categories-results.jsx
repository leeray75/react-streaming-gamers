import React from 'react';
import CategoryItem from './category-item';

function Results(props) {
    const results = props.categories.map( category => {
        const key = `category-item-${category.id}`;
        return (
            <CategoryItem key={key} {...category} />
        )
    })
    return results;
}

export default Results;