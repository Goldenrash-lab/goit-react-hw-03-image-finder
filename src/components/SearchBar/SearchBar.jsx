import React, { Component } from 'react';
import {
  SearchBarWrapper,
  SearchForm,
  SearchButtonText,
  SearchButton,
  SearchInput,
} from './SearchBar.styled';

export default class SearchBar extends Component {
  state = {
    search: '',
  };

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getSearch(this.state.search);
  };
  render() {
    return (
      <SearchBarWrapper>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchButtonText>Search</SearchButtonText>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearch}
            value={this.state.search}
          />
        </SearchForm>
      </SearchBarWrapper>
    );
  }
}
