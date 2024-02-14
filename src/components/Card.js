import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({element}) => {
  console.log(element);
  return (
    <div className ="shadow-md shadow-gray-600 rounded-lg">
        <img src = {element.src} alt = "" className="rounded-md duration-200 hover:scale-105" />         
        <div className = "flex items-center justify-center">
            <Link to={element.demo} target='blank'>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
            </Link>
            <Link to={element.code} target='blank'>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
            </Link>
        </div>
    </div>
  )
}
export default Card;