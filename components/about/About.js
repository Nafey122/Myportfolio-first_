import React, { useState } from 'react'
import Image from 'next/image'
import Nimage from '../../Assets/amisf-x4gvb.svg'

const imageStyle = {
  borderRadius: '10px',
}

const About = () => {
  const [tabination, setTabination] = useState(1)
  const OnTabination = (index) => {
    setTabination(index)
  }
  return (
    <div className="about h-100vh z-10 my-10 flex w-full items-center justify-center bg-gray-900 mmd:flex-col">
      <div className="left z-10 flex h-full w-[50%] items-center justify-center mmd:w-[100%]">
        <Image src={Nimage} height={450} width={450} style={imageStyle} />
      </div>
      <div className="right z-10 flex h-auto w-[50%] flex-col items-start  justify-center px-5 mmd:w-[90%]">
        <div className="text h-auto w-full py-5">
          <h1 className="SudoA mr-auto text-[50px] font-bold text-white">
            About
          </h1>
          <p className="text-white">
            I'm Nafey-Ul-Din, 19Year Old Pakistani Freelancer and Interactive
            Frontend Developer.I like to do Weired thing with coding and making
            Funny and Creepy thing . I Also like to playing with Error .I have 7
            Month Experience in Web Designing.
          </p>
        </div>
        <div className="top flex h-auto w-full">
          <ul className="flex h-auto w-[90%] flex-wrap items-center justify-between gap-x-2 py-3">
            <li
              onClick={() => setTabination(1)}
              className={
                tabination === 1
                  ? 'SudoLi active text-gray-300'
                  : 'SudoLi text-gray-300'
              }
            >
              Main Skills
            </li>
            <li
              onClick={() => setTabination(2)}
              className={
                tabination === 2
                  ? 'SudoLi active text-gray-300'
                  : ' SudoLi text-gray-300'
              }
            >
              Awards
            </li>
            <li
              onClick={() => setTabination(3)}
              className={
                tabination === 3
                  ? 'SudoLi active text-gray-300'
                  : 'SudoLi text-gray-300'
              }
            >
              Experience
            </li>
            <li
              onClick={() => setTabination(4)}
              className={
                tabination === 4
                  ? 'SudoLi active text-gray-300'
                  : 'SudoLi text-gray-300'
              }
            >
              Education & Certification
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div
            className={
              tabination === 1 ? 'b2 text-white' : 'b2 Hiddentab text-white'
            }
          >
            <h3>User Experience design1 - UI/UX</h3>
            <p>Delight the user and make it works</p>
            <h3>User Experience design - UI/UX</h3>
            <p>Delight the user and make it works</p>
            <h3>User Experience design - UI/UX</h3>
            <p>Delight the user and make it works</p>
          </div>
          <div
            className={
              tabination === 2 ? 'b2 text-white' : 'b2 Hiddentab text-white'
            }
          >
            <h3>User Experience design2 - UI/UX</h3>
            <p>Delight the user and make it works</p>
            <h3>User Experience design - UI/UX</h3>
            <p>Delight the user and make it works</p>
            <h3>User Experience design - UI/UX</h3>
            <p>Delight the user and make it works</p>
          </div>
          <div
            className={
              tabination === 3 ? 'b2 text-white' : 'b2 Hiddentab text-white'
            }
          >
            <h3>User Experience design3 - UI/UX</h3>
            <p>Delight the user and make it works</p>
            <h3>User Experience design - UI/UX</h3>
            <p>Delight the user and make it works</p>
            <h3>User Experience design - UI/UX</h3>
            <p>Delight the user and make it works</p>
          </div>
          <div
            className={
              tabination === 4 ? 'b2 text-white' : 'b2 Hiddentab text-white'
            }
          >
            <h3>User Experience design4 - UI/UX</h3>
            <p>Delight the user and make it works</p>
            <h3>User Experience design - UI/UX</h3>
            <p>Delight the user and make it works</p>
            <h3>User Experience design - UI/UX</h3>
            <p>Delight the user and make it works</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
