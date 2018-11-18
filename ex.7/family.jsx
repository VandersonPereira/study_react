import React from  'react'

export default props => (
    <div>
        <h1>Família</h1>
        {
            //Esse método só funciona para um elemento
        }
        {React.cloneElement(props.children, {...props})}
    </div>
)