import React from 'react';
import {withRouter} from  'react-router-dom';

import './menu-item.style.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, match, history}) =>(
    
    <div   className= {`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className ='background-image'
            style={{
            backgroundImage: `url(${imageUrl})`
            }} />
        

            

    
                <div className= 'content'>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
    </div>
   
)

export default withRouter(MenuItem);