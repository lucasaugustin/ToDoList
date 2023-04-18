import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

type CheckboxProps = {
  selected: boolean,
  onPress: () => void,
}

export function Checkbox({
  selected, 
  onPress,
}: CheckboxProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.checkbox}>
        {selected && <View style={styles.selected}/>}
      </View>
    </TouchableWithoutFeedback>

  )
}

const styles = {
  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 4,
    borderWidth: 2,
    paddingLeft: 4,
    borderColor: '#d7dae0',
  },
  selected: {
    height: 12,
    width: 8,
    borderWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    transform: [{rotate: '45deg'}],
    borderColor: '#d7dae0',
  }
}