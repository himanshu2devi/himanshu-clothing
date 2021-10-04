import React from "react";
import './Collection-preview-component.scss';
import CollectionItem from "../Collection-item/Collection-item.component";

const CollectionPreview = ({title,items}) => (

    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {

                    items
                    .filter((item,idx) =>idx < 4) 
                    .map(({id,name,imageUrl,price}) => (
                        <CollectionItem key={id} name={name} imageUrl={imageUrl} price={price} />
                    ))
            }
            
            </div> 

        </div>
);

export default CollectionPreview;

