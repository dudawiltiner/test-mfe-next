import React from 'react'
import './style.css'

export default function ShowFallbackMessageError() {
    return (
        <div className='error'>
            <h3>Ooopsie. Perdemos nosso componente!</h3>
            <p>Você deve ter esquecido de rodar o projeto ou  servir os estáticos </p>
        </div>
    )
}