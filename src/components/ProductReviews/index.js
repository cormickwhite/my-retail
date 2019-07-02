import React, { Component } from 'react';
import moment from 'moment';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class ProductReviews extends Component {
  buildStarsRating = (rating, large) => {
    let styleArray = Array(5).fill('grey');
    styleArray.fill('red', 0, rating);
    const size = large ? '2x' : '1x';
    return styleArray.map((style, index) => {
      return (
        <FontAwesomeIcon key={index} icon={faStar} size={size} color={style} />
      );
    });
  };

  formatDate = unformattedDate => {
    return moment(unformattedDate, 'ddd-MMM-D-HH-mm-ss-z-YYYY').format(
      'MMM D, YYYY'
    );
  };

  render() {
    const { reviews } = this.props;
    return (
      <div className="component">
        <div className="reviews-header-container">
          <span>
            {this.buildStarsRating(reviews.consolidatedOverallRating, true)}{' '}
            <strong>overall</strong>
          </span>
          <span>
            <strong>view all {reviews.totalReviews} reviews</strong>
          </span>
        </div>
        <div className="reviews-container">
          <div className="reviews-content-container">
            <div className="reviews-content">
              <strong className="med-lrg-text">PRO</strong>
              <div className="med-subtext">most helpful 4-5 star review</div>
            </div>
            <div className="reviews-content">
              <strong className="med-lrg-text">CON</strong>
              <div className="med-subtext">most helpful 1-2 star review</div>
            </div>
          </div>
          <div className="bottom-divider" />
          <div className="reviews-content-container">
            <div className="reviews-content">
              <span>{this.buildStarsRating(reviews.Pro[0].overallRating)}</span>
              <div>
                <strong>{reviews.Pro[0].title}</strong>
              </div>
              <div>{reviews.Pro[0].review}</div>
              <div>
                <br />
                <span>{reviews.Pro[0].screenName}</span>{' '}
                {this.formatDate(reviews.Pro[0].datePosted)}
              </div>
            </div>
            <div className="reviews-content">
              <span>{this.buildStarsRating(reviews.Con[0].overallRating)}</span>
              <div>
                <strong>{reviews.Con[0].title}</strong>
              </div>
              <div>{reviews.Con[0].review}</div>
              <div>
                <br />
                <span>{reviews.Con[0].screenName}</span>{' '}
                {this.formatDate(reviews.Con[0].datePosted)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductReviews;
