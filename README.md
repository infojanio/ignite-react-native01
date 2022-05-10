## Implementando desafio 01 do Ignite React Native


Anotações: 
- [x]  limpar o estado `task` sempre que uma nova `task` for adicionada.

<aside>
💡 setTask(' ')

</aside>

- [x]  use a propriedade `onSubmitEditing` do `TextInput`

<aside>
💡 *onSubmitEditing*={handleAddNewTask}

</aside>

- [x]  Essa função deve ser chamada quando o botão `TouchableOpacity` for pressionado

<aside>
💡 *onPress*={handleAddNewTask}

</aside>

### Implementar a função `**handleAddTask` no Home.tsx**

- [x]  receber o valor `newTaskTitle`,

<aside>
💡 function handleAddTask(*newTaskTitle*: *string*) {

</aside>

- [x]  criar uma nova `task`
- [x]  gerar um `id` aleatório usando o método `new Date().getTime()`
- [x]  a propriedade `done` deve sempre ser iniciada com o valor `false`.

```tsx
const newTask = {

id: **new** Date().getTime(),

title: newTaskTitle,

done: false,

}
```

- [x]  adicioná-la ao final do array `tasks` (respeitando o princípio da imutabilidade)

<aside>
💡 setTasks((*oldTasks*) => [...oldTasks, newTask])

</aside>

- [x]  no componente `TasksList` tudo que você precisa fazer é descomentar a linha `data={tasks}`

### Removendo todo

- [x]  utilize o método `onPress` do botão e chame a propriedade `removeTask` passando como parâmetro o `id` do `item`

<aside>
💡 *onPress*={() => removeTask(item.id)}

</aside>

- [x]  Na página `Home.tsx`, você vai precisar implementar a lógica do `handleRemoveTask`

```tsx
function handleRemoveTask(*id*: *number*) {

const updatedTasks = tasks.filter((*task*) => task.id !== id)

setTasks(updatedTasks)

}
```

- [x]  No componente `TasksList.tsx`, você precisa fazer com que o primeiro `TouchableOpacity` onde fica a caixinha de verificação(o que renderiza o ícone `check`) marque e desmarque o todo. Para isso, utilize o método `onPress` do botão e chame a propriedade `toggleTaskDone` passando como parâmetro o `id` do `item`.

<aside>
💡 *onPress*={() => removeTask(item.id)}

</aside>

- [x]  Caso a propriedade `done` esteja como `~~true` (caixa de tarefa estiver marcada)~~, você deve aplicar as seguintes estilizações:
- No componente `View` deve-se aplicar a estilização `styles.taskMarkerDone`;

<aside>
💡       *style*={item.done ? styles.taskMarkerDone : styles.taskMarker}

</aside>

- No componente `Text` deve-se aplicar a estilização `styles.taskTextDone`.
    
    <aside>
    💡 *style*={item.done ? styles.taskTextDone : styles.taskText}
    
    </aside>
    

- [x]  Caso a propriedade `done` esteja como `false`~~(caixa de tarefa estiver desmarcada)~~ você deve aplicar as seguintes estilizações:
- No componente `View` deve-se aplicar a estilização `styles.taskMarker`;

<aside>
💡 *style*={item.done ? styles.taskMarkerDone : styles.taskMarker}

</aside>

- No componente `Text` deve-se aplicar a estilização `styles.taskText`.

<aside>
💡 *style*={item.done ? styles.taskTextDone : styles.taskText}

</aside>

**Na página `Home.tsx`, você deve implementar a função `handleToggleTaskDone`.** 

- [x]  Essa função deve receber o `id` de uma tarefa e alterar a propriedade `done` para o inverso do seu valor, ou seja, altere para `true` caso esteja `false` ou altere para `false` caso esteja `true`.

```tsx
function handleToggleTaskDone(*id*: *number*) {

//busca todas as tarefas do array
const updatedTasks = tasks.map((*task*) => ({ ...task }))  

//busca tarefa concluida
const foundItem = updatedTasks.find((*item*) => item.id === id)            

if (!foundItem) return

//Inverte o done, true e false pelo click
foundItem.done = !foundItem.done                         

setTasks(updatedTasks)

}
```
