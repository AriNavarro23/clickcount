import React from 'react';

function Button({text, esBotonDeClic, manejarClic}) {
    
    return( 
        <button             
            className={esBotonDeClic ? 'button-clic' : 'button-restart'}
            onClick={manejarClic}>
            {text}
        </button>
    )
}

export default Button