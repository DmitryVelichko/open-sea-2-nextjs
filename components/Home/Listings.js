import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useMarketplace } from '@thirdweb-dev/react'

const Listings = () => {
    const marketplace = useMarketplace('0x43055a8Cd7613227f4450B66F91287D055B0DaF9');

    useEffect(() => {
        getListings()
    }, [])

    const getListings = async () => {
        try {
            const list = await marketplace.getActiveListings()
        } catch(error) {
            console.log("Error!!! " + error)
        }
    }

  return (
    <div>Listings</div>
  )
}

export default Listings