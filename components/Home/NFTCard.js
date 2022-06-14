import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai'

const NFTCard = ({listing}) => {
  return <div>{listing.asset.name}</div>;
};

export default NFTCard;
