import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({children,active,linkto}) => {
  return (
    <div>
    <Link to={linkto}>
            <div className={`text-center text-[13px] px-6 py-3  rounded-md font-bold
                ${active? ' bg-green-300 text-black' :  'bg-blue-500'  }
                hover:scale-95 transition-all duration-200`}>
                {children}  
            </div>
      </Link>
      
    </div>
  )
}

export default CTAButton




