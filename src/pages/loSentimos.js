import React from 'react'
import { Link } from "gatsby"

import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'

export default function loSentimos() {
    return (
        <div>
            <SEO title='Compra Cancelada' />
            <Purchase>
                <h2>Compra Cancelada</h2>
                <p>Lo sentimos por esto, cuando vuelvas tu swag te estará esperando de nuevo</p>
                <p>¡Te esperamos de vuelta, no pares de aprender!</p>
                <span role='img' aria-label='emoji'>😥</span>
                <Link to='/'>
                    <Button>Volver al catálogo</Button>
                </Link>
            </Purchase>
        </div>
    )
}
