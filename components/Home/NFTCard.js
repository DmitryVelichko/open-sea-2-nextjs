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
      <div className={style.nftLowerContainer}>
        <div className={style.nftInfoContainer}>
          <div>
            {listing.asset.collection && (
              <div className={style.collectionTitle}>
                {listing.asset?.collection?.name}
              </div>
            )}

            <div className={style.nftTitle}>
              {listing.asset.name}
            </div>
          </div>

          <div className={style.priceContainer}>
            <div className={style.priceTitle}>Buy at</div>
            <div className={style.wethImageContainer}>
              <Image 
              height={16}
              width={16}
              src='./weth-logo.svg'
              alt='weth'
              />
              <div className={style.priceValue}>
                {listing.buyoutCurrencyValuePerToken?.displayValue}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
