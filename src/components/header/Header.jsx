import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-row justify-between items-center h-20 px-10'>
        {/* left container */}
        <div className="flex flex-row gap-x-5">
            <h3>logo</h3>

            <ul className='flex flex-row gap-x-5'>
                <li><a href="">Home</a></li>
                <li><a href="">Job</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        {/* Iwan ka ng comments para alam ko kung san tu, o ano tu siya 
        para kung mag basa ako ng code hindi ako mawala masyado */}
        
        {/* right container */}
        <div className="flex flex-row gap-x-5">
            <button>Log in</button>
            <button className='bg-blue-300 text-sm rounded-full text-black px-4 py-2 font-semibold'>Get Start</button>
        </div>
    </div>
  )
}
