import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

interface HeaderProps {
  tasksCounter: number
}

//Faz a contagem de tarefas no Header
export function Header({ tasksCounter }: HeaderProps) {
  const tasksCounterText = tasksCounter === 1 ? 'tarefa' : 'tarefas'

  return (
    <View style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}>Você tem </Text>
        {
          <Text style={styles.tasksCounterBold}>
            {tasksCounter} {tasksCounterText}
          </Text>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(true) + 2,
    paddingHorizontal: 24,

    paddingBottom: 60,
    backgroundColor: '#8257E5',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tasks: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  tasksCounter: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter-Regular',
  },
  tasksCounterBold: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter-Bold',
  },
})
