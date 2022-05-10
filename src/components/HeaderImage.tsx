import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import logoImg from '../assets/images/logo/logo.png'

//Faz a contagem de tarefas no Header
export function HeaderImage() {
  const [greeting, setGreeting] = useState('') // saudações: Bom dia, Boa tarde, Boa noite
  const [date, setDate] = useState('')

  //TODO render 'tarefa' if tasksCounter equals 1, otherwise render 'tarefas'
  /* 
  let tasksCounterText = 'tarefas'
  if (tasksCounter === 1) tasksCounterText = 'tarefa'
  */

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour < 12) {
      setGreeting('Bom dia, ')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde, ')
    } else setGreeting('Boa noite, ')
  }, [])

  useEffect(() => {
    let currentDate = new Date()

    let dia = String(currentDate.getDate()).padStart(2, '0')
    let mes = String(currentDate.getMonth() + 1).padStart(2, '0')
    let ano = currentDate.getFullYear()
    let dataAtual = dia + '/' + mes + '/' + ano
    setDate(dataAtual)
  }, [])

  return (
    <View style={styles.container}>
      <Image source={logoImg} />

      <View style={styles.tasks}>
        <Text style={styles.greetings}> {greeting} </Text>
        <Text style={styles.date}> {date} </Text>

        {}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(true) + 16,
    paddingHorizontal: 28,

    paddingBottom: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tasks: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  greetings: {
    fontSize: 18,
    color: '#FFF',
    fontFamily: 'Inter-Bold',
  },

  date: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter-Bold',
  },
})
