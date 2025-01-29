import React from 'react'

const Header = ( {pageName, children} ) => {
    return <h1>{pageName + children}</h1>
}

export default Header