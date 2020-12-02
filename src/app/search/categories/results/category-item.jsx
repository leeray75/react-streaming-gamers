import React from 'react';

function CategoryItem(props) {
    const { box_art_url, name, id } = props;


    return (
        <div className="category-item" data-category-id={id}>
            <div className="box-art">
                <img src={box_art_url} />
            </div>
            <div className="category-info">
                <span className="name">{name}</span>
            </div>

        </div>
    )
}



export default CategoryItem;