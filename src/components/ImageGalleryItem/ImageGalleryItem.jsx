import React, { Component } from 'react';
import { GalleryItem, ItemImage } from './ImageGalleryItem.styled';
export default class ImageGalleryItem extends Component {
  handleClick = e => {
    this.props.openModal(this.props.largeImageURL);
  };
  render() {
    return (
      <GalleryItem onClick={this.handleClick} key={this.props.id}>
        <ItemImage src={this.props.webformatURL} alt="#" />
      </GalleryItem>
    );
  }
}
