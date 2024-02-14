import React from 'react'
import Card from './Card';
import netflix from "../assets/netflix.png";
import car_seller from "../assets/car seller.png";
import plan_tour from "../assets/plan tour.png";
import url_shortner from "../assets/url shortner.png";

const PortFolio = () => {
    const portfolios =[
        {
            src:netflix,
            demo:'https://netflix-gpt-jet.vercel.app/',
            code:'https://github.com/coderAj21/netflix-gpt'
        },
        {
            src:url_shortner,
            demp:'https://url-shortner-frontend-ecru.vercel.app/',
            code:'https://github.com/coderAj21/Url_Shortner',
        },
        {
            src:car_seller,
            demo:'https://seller-app-mob.vercel.app/',
            code:"https://github.com/coderAj21/Car-Seller-App-Mob",
        },
        {
            src:plan_tour,
            demo:'https://plan-tour-by-react.vercel.app/',
            code:"https://github.com/coderAj21/plan-tour-by-react"
        }

    ];
    return (
        <div name = "portfolio" 
            className ="bg-gradient-to-b from-black to-gray-800 w-full portfolio-section text-white md:h-screen">
        
            <div className = "max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full">
                <div className = "">
                    <p className = "text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                    <p className = "py-6"> Check Out Some Of My Work Right here</p>
                </div>
                <div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12  sm:px-0">
                {
                    portfolios.map((element,index)=>{
                        return <Card element={element} key={index} />
                    })
                }
                </div>
            </div>

        </div>
    )
}

export default PortFolio
