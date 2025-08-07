import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-row p-4 justify-between border-t border-gray-400">
        <p className="text-black-1 font-julius">@2025 Lux. All Rights RESERVED</p>
        <ul className="flex flex-col font-julius">
            <li> About us</li>
            <li> Blog </li>
            <li> Contact us</li>
        </ul>
    </footer>
  )
}

export default Footer