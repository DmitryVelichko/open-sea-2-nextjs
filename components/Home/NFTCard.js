import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';

const style = {};

const NFTCard = ({ listing }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.imageContainer}>
        <Image 
        className={style.nftImage}
        src={listing.asset.image}
        height={340}
        width={340}
        alt='nft monkey'
        />
      </div>
    </div>
  );
};

export default NFTCard;
