import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text } from "react-native";
import NavBarDM from "../components/NavBarDM";

const SearchScreenDM = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterPress = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const applyFilters = () => {
    console.log("Selected filters:", selectedFilters);
    setIsFilterOpen(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/images/rollerCoasterBackground.png')}
              style={styles.backgroundImg}
            />
            <View style={styles.headerContainer}>
              <TextInput
                placeholder="Search..."
                style={styles.input}
                placeholderTextColor={'#909090'}
              />
              <TouchableOpacity onPress={handleFilterPress} style={styles.filterButton}>
                <Image
                  source={require('../../assets/icons/filterIcon_Dark.png')}
                />
              </TouchableOpacity>
            </View>
            {isFilterOpen && (
              <View style={styles.filterContainer}>
                <View style={styles.filterColumn}>
                  <Text
                    style={[
                      styles.filterOption,
                      selectedFilters.includes("Motivation") && { color: "#CA9CE1" },
                    ]}
                    onPress={() => toggleFilter("Motivation")}
                  >
                    Motivation
                  </Text>
                  <Text
                    style={[
                      styles.filterOption,
                      selectedFilters.includes("Concentration") && { color: "#CA9CE1" },
                    ]}
                    onPress={() => toggleFilter("Concentration")}
                  >
                    Concentration
                  </Text>
                  <Text
                    style={[
                      styles.filterOption,
                      selectedFilters.includes("Relaxation") && { color: "#CA9CE1" },
                    ]}
                    onPress={() => toggleFilter("Relaxation")}
                  >
                    Relaxation
                  </Text>
                </View>
                <View style={styles.filterColumn}>
                  <Text
                    style={[
                      styles.filterOption,
                      selectedFilters.includes("Energetic") && { color: "#CA9CE1" },
                    ]}
                    onPress={() => toggleFilter("Energetic")}
                  >
                    Energetic
                  </Text>
                  <Text
                    style={[
                      styles.filterOption,
                      selectedFilters.includes("Expressive") && { color: "#CA9CE1" },
                    ]}
                    onPress={() => toggleFilter("Expressive")}
                  >
                    Expressive
                  </Text>
                </View>
                <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
                  <Text style={styles.applyButtonText}>Apply</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <NavBarDM />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#26282C",
  },
  container: {
    flex: 1,
    height: 1704,
  },
  imgContainer: {
    height: 740,
    position: 'relative',
  },
  backgroundImg: {
    height: 765,
    position: "absolute",
  },
  headerContainer: {
    width: '100%',
    height: 135,
    backgroundColor: '#161717',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  input: {
    borderRadius: 10,
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: '#909090',
    color: '#909090',
    marginRight: 10,
  },
  filterContainer: {
    position: 'absolute',
    top: 135,
    right: 0,
    width: '100%',
    height: 151,
    backgroundColor: '#161717',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterColumn: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  filterOption: {
    fontSize: 18,
    color: '#FFFFFC',
    marginLeft: 25,
  },
  applyButton: {
    backgroundColor: "#CA9CE1",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
    alignSelf: 'center',
  },
  applyButtonText: {
    color: "#26282C",
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchScreenDM;


