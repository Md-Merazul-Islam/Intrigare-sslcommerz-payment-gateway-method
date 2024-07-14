import React from 'react'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Services from '../Services/Services'
import Hock from '../Hock/Hock'
import Hook from '../Hook/Hook'



const services =[
  {
    id: 1,
    title: "Web Development",
    description: "We create modern, responsive websites with cutting-edge technology.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "We build cross-platform mobile apps using React Native and Flutter.",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "We help businesses create engaging and valuable content for their audience.",
  },
  {
    id: 4,
    title: "Software Development",
    description: "We develop custom software solutions for businesses and startups.",
  },
  {
    id: 5,
    title: "Artificial Intelligence",
    description: "We help businesses develop advanced AI solutions to improve customer experience.",
  },
  {
    id: 6,
    title: "Blockchain Development",
    description: "We help businesses build secure and decentral.",
  },
]
const AllComponents = () => {

 

  return (
    <div>
        <Navigation></Navigation>
        <Header></Header>
        <Services services={services}></Services>
        <Hock></Hock>
        <Hook></Hook>
        <Footer></Footer>
    </div>
  )
}

export default AllComponents