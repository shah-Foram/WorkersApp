// src/components/WorkerGrid.tsx
import React, { useMemo, useState } from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import { Worker } from '../type';
import workersData from '../data/worker.json';
import SearchHeader from './SearchHeader';

interface WorkerGridProps {
  selectedCategory: string | null;
}

const flagMapper: any = {
  "INDIA": require("../images/flags/india.png"),
  "USA": require("../images/flags/usa.png"),
  "CANADA": require("../images/flags/canada.png")
}

const WorkerGrid: React.FC<WorkerGridProps> = ({ selectedCategory }) => {
  const [searchString, setSearchString] = useState('');

  const filteredWorkers = useMemo(() => {
    return selectedCategory
      ? workersData.filter(worker => searchString ? 
        (worker.name.toLowerCase().includes(searchString.toLowerCase()) 
            && worker.category === selectedCategory) 
        : worker.category === selectedCategory)
      : workersData
  }, [selectedCategory, searchString]);

  const renderWorker = ({ item }: { item: Worker }) => (
    <View style={styles.workerCard}>
      <Image source={{ uri: item.profileImage }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Image source={flagMapper[item.country]} style={styles.countryFlag} />
    </View>
  );

  const handleSearch = (searchString: string) => {
    setSearchString(searchString);
  }

  return (
    <>
      <SearchHeader searchString={searchString} onSearch={handleSearch} />
      <FlatList
        data={filteredWorkers}
        renderItem={renderWorker}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </>
  );
};

const styles = StyleSheet.create({
  workerCard: {
    flex: 0.5,
    margin: 10,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 10,
    fontSize: 16,
  },
  countryFlag: {
    width: 30,
    height: 30,
    borderRadius: 50,
    position: 'absolute',
    right: 25,
    top: 10
  },
});

export default WorkerGrid;
