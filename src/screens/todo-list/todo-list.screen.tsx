import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar} from 'react-native'

import { ToDo } from '../../components'

export function ToDoListScreen() {
  const title = "Construção do app"

  const [todos, setTodos] = useState(initialTodos)

  const onToDoPress = (id:number) => {
    const updatedList = todos.map((todo) => {
      if (todo.id !== id) {
        return todo
      }
      return {
        id: todo.id,
        text: todo.text,
        done: !todo.done
      }
      
    })

    setTodos(updatedList)
  }

  return (
    <SafeAreaView style={{backgroundColor: '#282c34'}}>
       <StatusBar
        barStyle={'light-content'}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {todos.map(todo => (
          <ToDo key={todo.id} text={todo.text} done={todo.done} onPress={() => onToDoPress(todo.id)}/>
        ))}
      </View>
    </SafeAreaView>
  )
}

const styles = {
  container: {
    height: '100%',
    width: '100%',
    padding: 15,
  },
  title: {
    color: '#d7dae0',
    fontWeight: 500,
    fontSize: 24,
  }
}

const initialTodos = [
  {id: 1, done: false, text: 'criar checkbox'},
  {id: 2, done: false, text: 'criar estilo riscado no texto'},
  {id: 3, done: false, text: 'ajustar estilo do to-do'},
  {id: 4, done: false, text: 'adicionar firebase para salvar listas'},
]
