import React, { Component } from 'react';
import { AppWrapper } from './App.styled';
import SearchBar from 'components/SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Notify } from 'notiflix';
import { Modal } from 'components/Modal/Modal';
import { getImages } from 'services/api';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    images: null,
    page: 1,
    isSearch: false,
    search: '',
    loading: false,
    modal: false,
  };

  getSearch = async query => {
    this.setState({ loading: true });
    const { hits } = await getImages(query);
    this.setState({ images: hits, isSearch: true, page: 1, search: query, loading: false });
  };

  getPage = page => {
    this.setState({ page: page });
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.page < this.state.page) {
      this.setState({ loading: true });
      const { hits } = await getImages(this.state.search, this.state.page);
      this.setState(prev => ({
        images: [...prev.images, ...hits],
        loading: false,
      }));
    }
  }
  onWindowCloseModal = e => {
    if (e.code === 'Escape') {
      this.closeModal();
      window.removeEventListener('keydown', this.onWindowCloseModal);
    }
  };

  openModal = url => {
    this.setState({ url: url, modal: true });
    window.addEventListener('keydown', this.onWindowCloseModal);
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { images, isSearch, page, loading, modal, url } = this.state;
    let loadBtn = false;
    if (isSearch && images.length >= 12) {
      loadBtn = true;
    }
    return (
      <AppWrapper>
        {modal && <Modal url={url} close={this.closeModal} />}
        <SearchBar getSearch={this.getSearch}></SearchBar>

        {images && (
          <ImageGallery>
            {images.length > 0
              ? images.map(el => (
                  <ImageGalleryItem
                    openModal={this.openModal}
                    key={el.id}
                    webformatURL={el.webformatURL}
                    largeImageURL={el.largeImageURL}
                  />
                ))
              : Notify.warning('Not found!')}
          </ImageGallery>
        )}
        {loading && <Loader></Loader>}
        {loadBtn && <Button page={page} getPage={this.getPage} />}
      </AppWrapper>
    );
  }
}
