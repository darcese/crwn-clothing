import React from 'react';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {
    const {id, name, price, imageUrl} = item;
    return(
        <div className='collection-item' key={id}>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)}    inverted> Add to cart</CustomButton>
        </div>
    )};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);

