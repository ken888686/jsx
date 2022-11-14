import React from "react";

const ImageList = ({ images }) => {
  const imageList = images.map(({ id, urls, description }) => (
    <img key={id} src={urls.regular} alt={description} srcSet="" />
  ));

  return imageList;
};

export default ImageList;
