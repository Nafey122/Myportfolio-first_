import React from 'react'
import WebDesign from '../../public/web-design-svgrepo-com.svg'
import Image from 'next/image'
import WebDevelopment from '../../public/cloud-computing-web-development-svgrepo-com.svg'
import AppDesign from '../../public/app-file-format-symbol-svgrepo-com.svg'
const iconstyle = {
  height: '100px',
  weight: '100px',
  color: '#FFFFFF',
}
const Services = () => {
  return (
    <div className="Services z-10 flex h-auto w-full flex-wrap items-center justify-evenly">
      <div className="z-10 flex w-full flex-col items-center justify-center ">
        <h3 className="mx-auto text-white">WHAT WE DO</h3>
        <h1 className="mx-auto  mb-16 text-center text-[35px] font-bold text-white mmd:text-[4.5vw] msm:text-[25px]">
          We Have The Knowledge and Experience
        </h1>
      </div>
      <div className="flex h-auto w-full flex-wrap items-center justify-evenly mmd:flex-col">
        <div className="ServiceCard z-10 flex h-auto w-[30%]  flex-col items-center justify-center rounded-lg bg-gray-800 pb-20 pt-20  mmd:w-[90%] ">
          <div className="  mx-auto mt-[-130px] mb-5 flex rounded-full bg-gray-500 px-5 py-2">
            <Image src={WebDesign} height={60} width={60} />
          </div>
          <div className="flex ">
            <h1 className="mx-auto my-2 text-[25px] font-bold text-white">
              Web Designing
            </h1>
          </div>
          <div>
            <p className="text-center text-white">
              In today’s digital world, it is crucial to stay connected with
              your customers and prospects to leverage new markets and expand
              your business.
            </p>
          </div>
        </div>
        <div className="ServiceCard z-10 flex h-auto w-[30%] flex-col items-center justify-center rounded-lg bg-gray-800 pb-20 pt-20 mmd:my-16 mmd:w-[90%] ">
          <div className=" mx-auto mt-[-120px] mb-5 flex rounded-full bg-gray-500 px-5 py-2">
            <Image src={WebDevelopment} height={60} width={60} />
          </div>
          <div className="flex ">
            <h1 className="mx-auto my-2 text-[25px] font-bold text-white">
              Web Designing
            </h1>
          </div>
          <div>
            <p className="text-center text-white">
              In today’s digital world, it is crucial to stay connected with
              your customers and prospects to leverage new markets and expand
              your business.
            </p>
          </div>
        </div>
        <div className="ServiceCard z-10 flex h-auto w-[30%] flex-col items-center justify-center rounded-lg bg-gray-800 pb-20 pt-20 mmd:w-[90%] ">
          <div className="mx-auto  mt-[-120px] mb-5 flex rounded-full bg-gray-500 px-5 py-2">
            <Image src={AppDesign} height={60} width={60} />
          </div>
          <div className="flex ">
            <h1 className="mx-auto my-2 text-[25px] font-bold text-white">
              Web Designing
            </h1>
          </div>
          <div>
            <p className="text-center text-white">
              In today’s digital world, it is crucial to stay connected with
              your customers and prospects to leverage new markets and expand
              your business.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Services
