import type { NextPage } from 'next'
import Hero from '../components/Hero/Hero'
import SKill from '../components/skill/Skill'
import About from '../components/about/About'
import Services from '../components/services/Services'
import Contact from '../components/contact/Contact'

const Home: NextPage = () => {
  return (
<div className="NextApp bg-gray-900">
<Hero/>
<SKill/>
<About/>
<Services/>
<Contact/>

</div>
  )
}

export default Home
