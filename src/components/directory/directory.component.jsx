import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import '../menu-item/menu-item.style.scss';
import { selectDirectorySections} from '../../redux/directory/directory.selectors';

const Directory = ({sections}) => (
      <div className='directory-menu'>
        {
            sections.map(({id, ...otherSectionProps})=>(
                <MenuItem key={id} {...otherSectionProps} />))
          
        }               
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);