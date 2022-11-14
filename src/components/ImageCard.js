import React from "react";

class ImageCard extends React.Component {
  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img src={urls.regular} alt={description} srcSet="" />
      </div>
    );
  }
}

export default ImageCard;
