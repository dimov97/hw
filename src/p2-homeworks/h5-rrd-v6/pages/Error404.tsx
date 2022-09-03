import React from 'react'
import e from './Error404.module.css'

function Error404() {
    return (
        <div className={e.wrap}>
            <div className={e.error}>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
