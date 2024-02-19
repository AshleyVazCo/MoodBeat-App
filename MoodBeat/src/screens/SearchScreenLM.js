import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text } from "react-native";
import NavBarLM from "../components/NavBarLM";

const SearchScreenLM = () => {
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
                  source={require('../../assets/icons/filterIcon_Light.png')}
                />
              </TouchableOpacity>
            </View>
            {isFilterOpen && (
              <View style={styles.filterContainer}>
                <View style={styles.filterColumn}>
                  <Text
                    style={[
                      styles.filterOption,
                      selectedFilters.includes("Motivation") && { color: "#7700E6" },
                    ]}
                    onPress={() => toggleFilter("Motivation")}
                  >
                    Motivation
                  </Text>
                  <Text
                    style={[
                      styles.filterOption,
                      selectedFilters.includes("Concentration") && { color: "#7700E6" },
                    ]}
                    onPress={() => toggleFilter("Concentration")}
                  >
                    Concentration
                  </Text>
                  <Text
                    style={[
                      styles.filterOption,
                      selectedFilters.includes("Relaxation") && { color: "#7700E6" },
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
                      selectedFilters.includes("Energetic") && { color: "#7700E6" },
                    ]}
                    onPress={() => toggleFilter("Energetic")}
                  >
                    Energetic
                  </Text>
                  <Text
                    style={[
                      styles.filterOption,
                      selectedFilters.includes("Expressive") && { color: "#7700E6" },
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
        <NavBarLM />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FFFFFC",
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
    backgroundColor: '#FFFFFC',
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
    borderColor: '#26282C',
    color: '#26282C',
    marginRight: 10,
  },
  filterContainer: {
    position: 'absolute',
    top: 135,
    right: 0,
    width: '100%',
    height: 151,
    backgroundColor: '#FFFFFC',
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
    color: '#26282C',
    marginLeft: 25,
  },
  applyButton: {
    backgroundColor: "#7700E6",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
    alignSelf: 'center',
  },
  applyButtonText: {
    color: "#FFFFFC",
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchScreenLM;


