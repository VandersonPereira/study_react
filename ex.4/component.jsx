import React from 'react'

// Por ser Arrow function, pode-se usar assim:
const Primeiro = props => (
    <h1>Primeiro componente!</h1>
)

// ou assim:
const Segundo = props => <h1>Segundo componente!</h1>

export {Primeiro, Segundo}