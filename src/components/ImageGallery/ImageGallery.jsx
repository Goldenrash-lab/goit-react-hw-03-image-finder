import React, { Component } from 'react';
import { ImageGalleryWrapper } from './ImageGallery.styled';
export default class ImageGallery extends Component {
  render() {
    return <ImageGalleryWrapper>{this.props.children}</ImageGalleryWrapper>;
  }
}
