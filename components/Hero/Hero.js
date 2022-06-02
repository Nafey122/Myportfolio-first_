import React from 'react'
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'
import Image from 'next/image'
import ProfileImg from '../../Assets/amisf-x4gvb.svg'
import VideoSvg from '../../node_modules/@mui/icons-material/SlowMotionVideo'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Diamond } from 'react-awesome-shapes'
import FacebookRounded from '../../node_modules/@mui/icons-material/FacebookRounded'
import InstagramRounded from '../../node_modules/@mui/icons-material/Instagram'
import TwitterRounded from '../../node_modules/@mui/icons-material/Twitter'
import Github from '../../node_modules/@mui/icons-material/GitHub'
import LinkedIn from '../../node_modules/@mui/icons-material/LinkedIn'
import WhatsApp from '../../node_modules/@mui/icons-material/WhatsApp'

const style = {
  color: 'white',
  marginBottom: '10px',
}

const Hero = () => {
  const particlesInit = async (main) => {
    console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main)
  }

  const particlesLoaded = (container) => {
    console.log(container)
  }
  return (
    <div className="Hero relative z-10 mt-10 flex h-[100vh] w-full items-center justify-center bg-gray-900   mmd:h-auto mmd:flex-col msm:items-start  ">
      <div className="ImageP flex h-full w-1/2 items-center justify-center p-16 mmd:h-[50%] mmd:w-[50%] mmd:p-0  msm:ml-5">
        <Image
          src={ProfileImg}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          style={{ borderRadius: '100%', height: '100%', width: '100%' }}
        />
      </div>

      <div className="Name bg-gray   z-10 flex w-1/2  flex-col justify-center mmd:w-full mmd:items-center msm:ml-10 msm:items-start">
        <div className="textS z-10 flex h-auto  w-auto flex-col items-start justify-center ">
          <p className="text-xl text-white mmd:text-[3vw]">I'm</p>
          <h1 className="mb-1 p-0 text-[50px] font-bold text-white  mmd:text-[9vw] ">
            Nafey Ul Din
          </h1>
          <span className="text-[25px] italic text-white mmd:text-[3.5vw] ">
            Interactive Web Designer
          </span>
        </div>
        <div className="Cv my-2 mt-8 flex h-auto w-auto  items-center justify-start  text-white mmd:mt-4">
          <a href="/">
            <button className="mr-5 rounded-full border border-white p-1 px-4 msm:text-[3vw]">
              DownloadCV
            </button>
          </a>

          <a href=" " className="flex items-center justify-center">
            <span className="VideoIcon mx-2 flex h-10 w-10 items-center justify-center rounded-full border border-white p-1 msm:text-[3vw] ">
              <VideoSvg />
            </span>
            <span> Play Video</span>
          </a>
        </div>
      </div>
      <div className="Coding_links absolute top-20 right-5   z-10 flex flex-col mmd:top-5">
        <a href="" className="Slinks  ">
          <Github layout="responsive" style={style} width={100} height={100} />
        </a>
        <a href="" className="Slinks">
          <LinkedIn style={style} width={100} height={100} />
        </a>
        <a href="" className="Slinks">
          <FacebookRounded style={style} width={100} height={100} />
        </a>
        <a href="" className="Slinks">
          <InstagramRounded style={style} width={100} height={100} />
        </a>
        <a href="" className="Slinks">
          <TwitterRounded style={style} width={100} height={100} />
        </a>

        <a className="Slinks">
          <WhatsApp style={style} width={100} height={100} />
        </a>
      </div>
    </div>
  )
}

export default Hero
