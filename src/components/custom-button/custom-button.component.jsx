import React from 'react'

import './custom-button.styles.scss';


//<button class="google-sign-in custom-button">Sign In With Google</button>
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>

)

export default CustomButton