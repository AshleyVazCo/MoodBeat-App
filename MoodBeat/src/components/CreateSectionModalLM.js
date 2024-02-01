import React from "react";
import { StyleSheet, View, Text } from "react-native"

const CreateSection = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>CREATE TODAY</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#fffffc",
  },
});

export default CreateSection;