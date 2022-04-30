## Implementando o 1 desafio do Ignite React Native

- [https://www.notion.so/Desafio-01-Conceitos-do-React-Native-424de969f3274ed5b9b49534b288a04d#8d3825dcbc77434abc0f6e598eb42f52](https://www.notion.so/Desafio-01-Conceitos-do-React-Native-424de969f3274ed5b9b49534b288a04d)

Anotações: 

### Implementando contagem no Header

- [x]  atribuir o valor `tarefa` caso o `tasksCounter` for igual a 1. Caso contrário, atribua o valor `tarefas`.
- const tasksCounterText = tasksCounter === 1 ? 'tarefa' : 'tarefas’

### Adicionando todo

- [x]  No componente `TodoInput.tsx`,  o estado `task` deverá ser usado na propriedade `value` do componente `TextInput`
- [x]  A função `setTask` que deve ser usada na propriedade `onChangeText` também do `TextInput`.

### Implementar a função **handleAddNewTask no TodoInput.tsx**

- [x]  o valor recebido **deve** ser diferente de uma `string` vazia.
- [x]  verifique se esse nome da tarefa é uma `string` válida.
- if (!task) return
- [x]  Essa função deve chamar a função `addTask`
- addTask(task)

- [x]  limpar o estado `task` sempre que uma nova `task` for adicionada.
- setTask(' ')

- [x]  use a propriedade `onSubmitEditing` do `TextInput`
- *onSubmitEditing*={handleAddNewTask}

- [x]  Essa função deve ser chamada quando o botão `TouchableOpacity` for pressionado
- *onPress*={handleAddNewTask}

### Implementar a função `**handleAddTask` no Home.tsx**

- [x]  receber o valor `newTaskTitle`,
- function handleAddTask(*newTaskTitle*: *string*) {

- [x]  criar uma nova `task`
- [x]  gerar um `id` aleatório usando o método `new Date().getTime()`
- [x]  a propriedade `done` deve sempre ser iniciada com o valor `false`.

const newTask = {

id: **new** Date().getTime(),

title: newTaskTitle,

done: false,

}

- [x]  adicioná-la ao final do array `tasks` (respeitando o princípio da imutabilidade)
- setTasks((*oldTasks*) => [...oldTasks, newTask])

- [x]  no componente `TasksList` tudo que você precisa fazer é descomentar a linha `data={tasks}`

### Removendo todo

- [x]  utilize o método `onPress` do botão e chame a propriedade `removeTask` passando como parâmetro o `id` do `item`

*onPress*={() => removeTask(item.id)}

- [x]  Na página `Home.tsx`, você vai precisar implementar a lógica do `handleRemoveTask`

function handleRemoveTask(*id*: *number*) {

const updatedTasks = tasks.filter((*task*) => task.id !== id)

setTasks(updatedTasks)

}

- [x]  No componente `TasksList.tsx`, você precisa fazer com que o primeiro `TouchableOpacity` onde fica a caixinha de verificação(o que renderiza o ícone `check`) marque e desmarque o todo. Para isso, utilize o método `onPress` do botão e chame a propriedade `toggleTaskDone` passando como parâmetro o `id` do `item`.
- *onPress*={() => removeTask(item.id)}

- [x]  Caso a propriedade `done` esteja como `~~true` (caixa de tarefa estiver marcada)~~, você deve aplicar as seguintes estilizações:
- No componente `View` deve-se aplicar a estilização `styles.taskMarkerDone`;

      *style*={item.done ? styles.taskMarkerDone : styles.taskMarker}

- No componente `Text` deve-se aplicar a estilização `styles.taskTextDone`.
    
    *style*={item.done ? styles.taskTextDone : styles.taskText}
    

- [x]  Caso a propriedade `done` esteja como `false`~~(caixa de tarefa estiver desmarcada)~~ você deve aplicar as seguintes estilizações:
- No componente `View` deve-se aplicar a estilização `styles.taskMarker`;

*style*={item.done ? styles.taskMarkerDone : styles.taskMarker}

- No componente `Text` deve-se aplicar a estilização `styles.taskText`.

*style*={item.done ? styles.taskTextDone : styles.taskText}

**Na página `Home.tsx`, você deve implementar a função `handleToggleTaskDone`.** 

- [ ]  Essa função deve receber o `id` de uma tarefa e alterar a propriedade `done` para o inverso do seu valor, ou seja, altere para `true` caso esteja `false` ou altere para `false` caso esteja `true`.

function handleToggleTaskDone(*id*: *number*) {

const updatedTasks = tasks.map((*task*) => ({ ...task }))        //busca todas as tarefas do array

const foundItem = updatedTasks.find((*item*) => item.id === id)              //busca tarefa concluida

if (!foundItem) return

foundItem.done = !foundItem.done                         //Inverte o done, true e false pelo click

setTasks(updatedTasks)

}
