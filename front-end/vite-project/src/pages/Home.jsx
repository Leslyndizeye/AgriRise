import React from 'react'
import Hero from '../components/Hero';
import Popular from '../components/Popular';
import Offer from '../components/Offer.jsx';
import NewCollections from '../components/NewCollections';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
    return (
        <>
            <Hero />
            <Popular />
            <Offer />
            <NewCollections/>
            <NewsLetter />
        </>
    )
}

export default Home