import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import AllSteps from './AllSteps'

const ScanQr = () => (
<ScrollView style={styles.scan_qr} showsVerticalScrollIndicator={false}>
<Text style={styles.scan_qr_title}>{item.scan_qr_title}</Text>
<Text style={styles.about_qr}>{item.about_qr}</Text>
<Image
    style={styles.tick_icon}
    source={{uri: item.tick_icon}}
   />
<Text style={styles.connection_status}>{item.connection_status}</Text>
<Text style={styles.peer_suggestion}>{item.peer_suggestion}</Text>
<AllSteps item={item.all_steps}/>
</ScrollView>
)

export default ScanQr;

const styles = StyleSheet.create({
scan_qr_title: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
about_qr: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
tick_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
connection_status: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
peer_suggestion: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  }
});