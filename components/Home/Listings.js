import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useMarketplace } from '@thirdweb-dev/react'
import NFTCard from './NFTCard'

const style = {

}

const Listings = () => {
    const [listings, setListings] = useState([]);
    const marketplace = useMarketplace('0x43055a8Cd7613227f4450B66F91287D055B0DaF9');
    

    useEffect(() => {
        getListings()
    }, [])

    const getListings = async () => {
        try {
            const list = await marketplace.getActiveListings()
            setListings(list)
        } catch(error) {
            console.log("Error!!! " + error)
        }
    }

  return (
    <div className={style.wrapper}>
        {listings.length > 0 ? (
            <>
               {listings?.map((listing) => (
                <NFTCard />
               ))}
            </>
        ) : (
            <div>Loading...</div>
        )}
    </div>
  )
}

export default Listings