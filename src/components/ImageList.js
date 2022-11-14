import React from "react";
import "./ImageList.css";

const ImageList = ({ images }) => {
  const imageList = images.map(({ id, urls, description }) => (
    <img key={id} src={urls.regular} alt={description} srcSet="" />
  ));

  return <div className="image-list">{imageList}</div>;
};

export default ImageList;
