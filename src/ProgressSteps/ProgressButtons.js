import React from 'react'
import { View } from 'react-native'

const ProgressButtons = (props) => (
  <View
    style={{
      flexDirection: 'row',
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 60,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderColor: '#a3a5a940',
    }}
  >
    <View style={{ bottom: 0 }}>{props.renderPreviousButton()}</View>
    <View style={{ bottom: 0 }}>{props.renderNextButton()}</View>
  </View>
)

export default ProgressButtons
