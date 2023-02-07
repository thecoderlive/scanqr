import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'



const allStepsItem = ({ item }) => (
<View style={styles.all_steps_item}>
<Text style={styles.step}>{item.step}</Text>
</View>
  );

const AllSteps = ({ item }) => (
<FlatList
    style={styles.all_steps}
    data={item}
    renderItem={allStepsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default AllSteps;

const styles = StyleSheet.create({
step: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  }
});