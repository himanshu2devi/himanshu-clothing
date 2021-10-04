import React from 'react';
import SHOP_DATA from './Shop.data';
import CollectionPreview from '../../components/Preview-collection-component/Collection-preview-component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections: SHOP_DATA
        };
    }


render() {
    const {collections} = this.state;

    return (<div className='shop-page'>
        
        {

            collections.map(({id,title,routeName,items}) => (
                <CollectionPreview key={id} title={title} routeName={routeName} items={items} />
            ))
        }
        
         </div>);
}

}
export default ShopPage;