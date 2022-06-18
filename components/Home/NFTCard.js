import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';

const style = {
  wrapper: `relative flex h-[450px] w-[340px] cursor-pointer flex-col rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-[#333333]`,
  imageContainer: `h-3/4 overflow-hidden`,
  nftImage: `rounded-t-lg object-cover`,
  nftLowerContainer: `flex h-1/4 flex-col justify-between p-4`,
  collectionTitle: `text-sm text-gray-500 dark:text-gray-400`,
  nftTitle: `text-sm font-bold`,
  priceContainer: `flex flex-col items-end justify-center space-y-1`,
  priceTitle: `text-xs font-light`,

};

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
              src='/weth-logo.svg'
              alt='weth'
              />
              <div className={style.priceValue}>
                {listing.buyoutCurrencyValuePerToken?.displayValue}
              </div>
            </div>
          </div>
        </div>
        <div className={style.likesContainer}>
          <AiOutlineHeart className={style.heartIcon}/>
          <div className={style.likeCounter}>
          {listing.asset?.stats?.favorites ?? 0}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
