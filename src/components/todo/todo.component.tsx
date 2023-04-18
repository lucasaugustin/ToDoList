import React from 'react'
import { View, Text } from 'react-native'

import { Checkbox } from '../../components'

type ToDoProps = {
  text: string,
  done: boolean,
  onPress: () => void,
}
export function ToDo({text, done, onPress}: ToDoProps) {

  return (
    <View style={styles.todo}>
      <Checkbox selected={done} onPress={onPress}/>
      <Text style={[ styles.text,  done && styles.doneText]}>
        {text}
      </Text>
    </View>
  )
}

const styles = {
  todo: {
    paddingTop: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    paddingLeft: 10,
    fontWeight: 500,
    color: '#d7dae0'
  },
  doneText: {
    textDecorationLine: 'line-through',
  }
}