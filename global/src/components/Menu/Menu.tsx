import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <nav>
        <div>
            <a href=""><span>Smart Energy</span></a>
            <div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Login</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
