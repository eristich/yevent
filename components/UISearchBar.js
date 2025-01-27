import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function UISearchBar({ placeholder, onSearch }) {
  const [query, setQuery] = React.useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <TextInput
      style={styles.searchBar}
      value={query}
      onChange={handleInputChange}
      placeholder={placeholder || 'Search...'}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});
