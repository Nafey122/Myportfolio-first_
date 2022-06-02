import React from 'react'

const Skill = () => {
  return (
    <div className="skill z-10 flex h-auto w-full flex-col items-center  justify-center border-y border-white bg-gray-900  pb-10 ">
      <div className="text z-10 flex h-auto w-full items-center justify-center ">
        <h1 className=" mx-auto h-auto w-auto  py-4 text-[50px] font-bold text-white">
          MY SKILLS
        </h1>
      </div>
      <div className="SkillS z-10 flex h-auto w-full items-center justify-evenly mmd:flex-col">
        <div className="left z-10 flex h-auto w-[48%] flex-col items-center justify-center mmd:w-[98%] ">
          <div className="Skillbar flex h-auto w-full flex-col items-center  justify-center">
            <div className="NamePercant flex w-[90%]  items-center justify-center ">
              <span className="text-md mr-auto font-bold text-white">HTML</span>
              <span className="ml-auto text-lg font-bold text-white">98%</span>
            </div>
            <div className="bar relative h-[15px] w-[90%] rounded-full bg-gray-800  ">
              <span className="barr1 absolute h-[15px] w-[98%] rounded-full border bg-red-500 "></span>
            </div>
          </div>
          <div className="Skillbar flex h-auto w-full flex-col items-center  justify-center">
            <div className="NamePercant flex w-[90%]  items-center justify-center ">
              <span className="text-md mr-auto font-bold text-white">CSS</span>
              <span className="ml-auto  text-lg font-bold text-white">95%</span>
            </div>
            <div className="bar relative h-[15px] w-[90%] rounded-full bg-gray-800  ">
              <span className="barr2 absolute h-[15px] w-[95%] rounded-full border bg-green-500 "></span>
            </div>
          </div>
          <div className="Skillbar flex h-auto w-full flex-col items-center  justify-center">
            <div className="NamePercant flex w-[90%]  items-center justify-center ">
              <span className="text-md mr-auto font-bold text-white">JS</span>
              <span className="ml-auto  text-lg font-bold text-white">70%</span>
            </div>
            <div className="bar relative h-[15px] w-[90%] rounded-full bg-gray-800  ">
              <span className="barr3 absolute h-[15px] w-[70%] rounded-full border bg-cyan-500 "></span>
            </div>
          </div>
          <div className="Skillbar flex h-auto w-full flex-col items-center  justify-center">
            <div className="NamePercant flex w-[90%]  items-center justify-center ">
              <span className="text-md mr-auto font-bold text-white">
                React JS
              </span>
              <span className="ml-auto text-lg font-bold text-white">70%</span>
            </div>
            <div className="bar relative h-[15px] w-[90%] rounded-full bg-gray-800  ">
              <span className="barr4 absolute h-[15px] w-[70%] rounded-full border bg-yellow-500 "></span>
            </div>
          </div>
        </div>
        <div className="right  flex h-auto w-[48%] flex-col items-center justify-center mmd:w-[98%]">
          <div className="Skillbar flex h-auto w-full flex-col items-center  justify-center">
            <div className="NamePercant flex w-[90%]  items-center justify-center ">
              <span className="text-md mr-auto font-bold text-white">
                Jquery
              </span>
              <span className="ml-auto text-lg font-bold text-white">90%</span>
            </div>
            <div className="bar relative h-[15px] w-[90%] rounded-full bg-gray-800  ">
              <span className="barr5 absolute h-[15px] w-[98%] rounded-full border bg-pink-500 "></span>
            </div>
          </div>
          <div className="Skillbar flex h-auto w-full flex-col items-center  justify-center">
            <div className="NamePercant flex w-[90%]  items-center justify-center ">
              <span className="text-md mr-auto font-bold text-white">
                Bootstrap
              </span>
              <span className="ml-auto text-lg font-bold text-white">100%</span>
            </div>
            <div className="bar relative h-[15px] w-[90%] rounded-full bg-gray-800  ">
              <span className="barr6 absolute h-[15px] w-[100%] rounded-full border bg-blue-500 "></span>
            </div>
          </div>
          <div className="Skillbar flex h-auto w-full flex-col items-center  justify-center">
            <div className="NamePercant flex w-[90%]  items-center justify-center ">
              <span className="text-md mr-auto font-bold text-white">
                Tailwind CSS
              </span>
              <span className="ml-auto  text-lg font-bold text-white">
                100%
              </span>
            </div>
            <div className="bar relative h-[15px] w-[90%] rounded-full bg-gray-800  ">
              <span className="barr7 absolute h-[15px] w-[100%] rounded-full border bg-yellow-500 "></span>
            </div>
          </div>
          <div className="Skillbar flex h-auto w-full flex-col items-center  justify-center">
            <div className="NamePercant flex w-[90%]  items-center justify-center ">
              <span className="text-md mr-auto font-bold text-white">
                NEXT JS
              </span>
              <span className="ml-auto text-lg font-bold text-white">60%</span>
            </div>
            <div className="bar relative h-[15px] w-[90%] rounded-full bg-gray-800  ">
              <span className="barr8 absolute h-[15px] w-[60%] rounded-full border bg-gray-500 "></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
