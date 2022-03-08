import React from "react";
import { ImageList } from "@mui/material";
import { NFTCollectionItem } from "./NFTCollectionItem";

export const NFTCollection = () => {
  const nfts = [
    {
      name: "NFT - 1",
      src: "https://picsum.photos/200?random=1",
    },
    {
      name: "NFT - 2",
      src: "https://picsum.photos/200?random=2",
    },
    {
      name: "NFT - 3",
      src: "https://picsum.photos/200?random=3",
    },
    {
      name: "NFT - 4",
      src: "https://picsum.photos/200?random=4",
    },
    {
      name: "NFT - 5",
      src: "https://picsum.photos/200?random=5",
    },
  ];
  return (
    <ImageList
      sx={{
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fit, minmax(24%,1fr)) !important",
        gridAutoColumns: "minmax(24%, 1fr)",
        gap: "3% !important"
      }}
    >
      {nfts.map((nft, index) => (
        <NFTCollectionItem name={nft.name} src={nft.src} key={index} />
      ))}
    </ImageList>
  );
};
