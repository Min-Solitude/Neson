import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <Link href={'/about'}>About</Link>
        </header>
    )
}

export default Header