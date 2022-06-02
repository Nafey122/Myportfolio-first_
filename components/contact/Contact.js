import React from 'react'

const Contact = () => {
  return (
    <div className="contact z-10 flex h-auto w-full items-center justify-center mmd:flex-col">
      <div className="left z-10 flex w-[60%] flex-col items-center justify-center mmd:w-[95%]">
        <div className="text my-5 w-[90%] ">
          <h1 className="mx-auto text-[45px] text-white">Let's Talk</h1>
        </div>
        <div className="form flex w-full items-center justify-center">
          <form className="form flex  w-full flex-col items-center justify-center">
            <input
              type="text"
              placeholder="Your Name"
              className="mb-5 w-[90%] border-none bg-gray-800 px-2 py-2 text-white outline-none "
            />
            <input
              type="text"
              placeholder="Your Email"
              className="mb-5 w-[90%] border-none  bg-gray-800 px-2 py-2 text-white outline-none"
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="mb-5 w-[90%] border-none bg-gray-800 px-2 py-2 text-white outline-none "
            />
            <textarea
              cols="30"
              rows="5"
              placeholder="Enter Your Message"
              className="w-[90%] border-none bg-gray-800 px-2 py-2 text-white outline-none "
            ></textarea>
          </form>
        </div>
      </div>
      <div
        className="right z-10 flex w-[40%]
       flex-col items-center justify-center mmd:w-[95%]"
      >
        <div className="text my-5 w-[90%] ">
          <h1 className="mx-auto text-[45px] text-white">Contact Us</h1>
        </div>
        <div className="my-5 flex h-auto w-[90%]  flex-col  ">
          <h3 className="text-xl font-bold text-white">My Email :</h3>
          <p className="text-md italic text-white ">maliknafey456@gmail.com</p>
          <h3 className="mt-4 text-xl text-white">My Phone :</h3>
          <p className="text-xl text-white">+923435374847</p>
          <h3 className="mt-4 text-xl text-white">My Address :</h3>
          <p className="text-xl text-white">Islamabad</p>
          <h3 className="mt-4 text-xl text-white">My Website :</h3>
          <a className="text-xl text-white">www.nafeyuldin.com</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
