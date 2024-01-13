import { useState } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  SearchInput,
} from './SearchBar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    const userQuery = e.target.value;
    setQuery(userQuery);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    e.target.reset();
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchButton type="submit">
          <SearchButtonLabel />
        </SearchButton>

        <SearchInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

export default Searchbar;
