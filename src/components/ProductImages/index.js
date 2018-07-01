import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearchPlus,
  faAngleLeft,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';

class ProductImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        ...props.images[0].PrimaryImage,
        ...props.images[0].AlternateImages
      ],
      previousImageIndex: props.images[0].AlternateImages.length,
      currentImageIndex: 0,
      nextImageIndex: 1
    };
  }

  nextImage = () => {
    let index, prevIndex, nextIndex;

    index = this.state.currentImageIndex + 1;
    index = index % this.state.images.length;

    if (index === 0) {
      prevIndex = this.state.images.length - 1;
    } else {
      prevIndex = index - 1;
    }

    nextIndex = index + 1;
    nextIndex = nextIndex % this.state.images.length;

    this.setState({
      previousImageIndex: prevIndex,
      currentImageIndex: index,
      nextImageIndex: nextIndex
    });
  };

  previousImage = () => {
    if (this.state.currentImageIndex === 0) {
      this.setState({
        previousImageIndex: this.state.images.length - 2,
        currentImageIndex: this.state.images.length - 1,
        nextImageIndex: 0
      });
    } else if (this.state.currentImageIndex === 1) {
      this.setState({
        previousImageIndex: this.state.images.length - 1,
        currentImageIndex: this.state.currentImageIndex - 1,
        nextImageIndex: this.state.currentImageIndex
      });
    } else {
      this.setState({
        previousImageIndex: this.state.currentImageIndex - 2,
        currentImageIndex: this.state.currentImageIndex - 1,
        nextImageIndex: this.state.currentImageIndex
      });
    }
  };

  viewLarger = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  };

  viewLargerClose = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  };

  render() {
    const {
      previousImageIndex,
      currentImageIndex,
      nextImageIndex,
      images
    } = this.state;

    return (
      <div>
        <div className="image-carousel-container">
          <img
            alt="blender"
            onClick={this.viewLarger}
            src={this.state.images[currentImageIndex].image}
          />
        </div>
        <div className="image-enhance-container" onClick={this.viewLarger}>
          <FontAwesomeIcon icon={faSearchPlus} size="3x" color="grey" /> view
          larger
        </div>
        <div className="image-carousel-container">
          <button className="image-buttons" onClick={this.previousImage}>
            <FontAwesomeIcon icon={faAngleLeft} size="3x" color="grey" />
          </button>
          <img
            onClick={this.previousImage}
            className="image-thumbnail"
            alt="blender"
            src={images[previousImageIndex].image}
          />
          <img
            className="image-thumbnail current-image"
            alt="blender"
            src={images[currentImageIndex].image}
          />
          <img
            onClick={this.nextImage}
            className="image-thumbnail"
            alt="blender"
            src={images[nextImageIndex].image}
          />
          <button className="image-buttons" onClick={this.nextImage}>
            <FontAwesomeIcon icon={faAngleRight} size="3x" color="grey" />
          </button>
        </div>
        <div id="modal" className="modal" onClick={this.viewLargerClose}>
          <span className="close" onClick={this.viewLargerClose}>
            ×
          </span>
          <img
            className="modal-content"
            alt="enhanced modal"
            id="modalImg"
            src={images[currentImageIndex].image}
          />
        </div>
      </div>
    );
  }
}

export default ProductImages;
