// src/components/Header.tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


const SearchHeader = (props: {
  searchString: string,
  onSearch: (searchStr: string) => void
}) => {
  const { searchString, onSearch } = props;

  const handleChangeText = (inputText: string) => {
    onSearch(inputText);
  };

  return (
    <View>
      <TextInput
        value={searchString}
        style={styles.searchBar}
        onChangeText={handleChangeText} 
        placeholder="Search workers by Name..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#FFF',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
});

export default SearchHeader;
