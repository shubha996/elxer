import React from 'react'
import Header from '../../common/header/Header';
import CarouselComponent from './carousel component/CarouselComponent';
import Referal from './refer&earnBanner/Referal';
import Recharge from './recharge/Recharge'
import WhyUs from './why-us/WhyUs';
import JoinUs from './joinUs/JoinUs';
import HappyCustomers from './happyCustomers/HappyCustomers';
import Footer from '../../common/footer/Footer';

const Home = () => {
  return (
    <>
        <Header/>
        <CarouselComponent/>
        <Referal/>
        <Recharge/>
        <WhyUs/>
        <JoinUs/>
        <HappyCustomers/>
        <Footer/>
    </>
  )
}

export default Home