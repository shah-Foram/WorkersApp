// src/screens/CategoriesScreen.tsx
import React, { useMemo, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import WorkerGrid from '../components/WorkerGrid';
import { Category } from '../type';
import categoriesData from '../data/category.json';
import { Image } from 'react-native-elements';

const CategoriesScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const imageMapper: any = useMemo(() => {
    return {
      "astrology": require("../../src/images/icons/astrology.png"),
      "mahendi": require("../../src/images/icons/mahendi.png"),
      "makeup": require("../../src/images/icons/makeup.png"),
      "photography": require("../../src/images/icons/photography.png"),
    }
  }, [categoriesData]);

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categoriesData as Category[]}
        horizontal
        renderItem={({ item }: { item: Category }) => (
          <TouchableOpacity style={selectedCategory === item.id ? styles.selectedCategory : styles.category} onPress={() => handleCategoryPress(item.id)}>
            <View style={styles.iconContainer}>
              <Image source={imageMapper[item.image]} style={styles.image} />
              <Text>{item.Worker_Role}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item: Category) => item.id}
      />
      <WorkerGrid selectedCategory={selectedCategory} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  },
  category: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  selectedCategory: {
    backgroundColor: '#e8e1ef'
  },
  iconContainer: {
    alignItems: 'center',
    margin: 15
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default CategoriesScreen;
