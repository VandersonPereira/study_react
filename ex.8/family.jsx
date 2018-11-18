import React from  'react'

export default props => (
    <div>
        <h1>Família</h1>
        {
            //Esse método é para multielementos
        }
        {React.Children.map(props.children,
            child => React.cloneElement(child, {...props}))}
    </div>
)