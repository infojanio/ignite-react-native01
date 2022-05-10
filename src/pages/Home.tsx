import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'

import { Header } from '../components/Header'
import { HeaderImage } from '../components/HeaderImage'
import { Task, TasksList } from '../components/TasksList'
import { TodoInput } from '../components/TodoInput'

export type EditTaskArgs = {
  taskId: number
  taskNewTitle: string
}

export function Home() {
  //usar a hook useState (principio da imutabilidade)
  const [tasks, setTasks] = useState<Task[]>([])

  //Adiciona uma tarefa na lista
  function handleAddTask(newTaskTitle: string) {
    //verifica se já existe a tarefa com mesmo titulo
    const taskSameWithTitle = tasks.find((task) => task.title === newTaskTitle)

    if (taskSameWithTitle) {
      return Alert.alert(
        'Task já cadastrada',
        'Você não pode cadastrar uma task com o mesmo nome',
      )
    }

    //TODO - add new task
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }
    setTasks((oldTasks) => [...oldTasks, newTask]) //adiciona a tarefa no final do array
  }

  //Marca a tarefa concluída (true or false)
  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const updatedTasks = tasks.map((task) => ({ ...task })) //busca todas as tarefas do array

    const foundItem = updatedTasks.find((item) => item.id === id) //busca tarefa concluida

    if (!foundItem) return
    //Alert.alert('Não existem tarefas cadastradas!')

    foundItem.done = !foundItem.done //Inverte o done, true e false pelo click
    setTasks(updatedTasks)
  }

  //Remove uma tarefa
  function handleRemoveTask(id: number) {
    Alert.alert(
      'Remover item',
      'Tem certeza que você deseja remover esse item?',
      [
        {
          style: 'cancel',
          text: 'Não',
        },

        {
          style: 'destructive',
          text: 'Sim',
          onPress: () => {
            const updatedTasks = tasks.filter((task) => task.id !== id)
            setTasks(updatedTasks)
          },
        },
      ],
    )
  }

  //Edita uma tarefa
  function handEditTask({ taskId, taskNewTitle }: EditTaskArgs) {
    const updatedTasks = tasks.map((task) => ({ ...task })) //busca todas as tarefas do array

    const taskToBeUpdated = updatedTasks.find((task) => task.id === taskId) //busca tarefa concluida

    if (!taskToBeUpdated) return //se não existir tarefa return

    taskToBeUpdated.title = taskNewTitle //se existir altera o title
    setTasks(updatedTasks) //atualiza o estado
  }

  return (
    <View style={styles.container}>
      <HeaderImage />
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
        editTask={handEditTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
})
