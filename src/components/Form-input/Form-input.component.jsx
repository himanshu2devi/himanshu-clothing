import React from "react";

import './Form-input.styles.scss';

const FormInput = ({handleChange,label, ...otherProps}) => (

    <div className="group" >
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {label ?  //selectively render label. if we want to pass in label property
            (
            <label 
                className={`${
                    otherProps.value.length ? 'shrink' : '' }  form-input-label`}>
             {label}


                </label>
            )
                :null}
        
        </div>
        
);
export default FormInput;
