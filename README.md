PASSO A PASSO 

### Implementando contagem no Header

- [x]  atribuir o valor `tarefa` caso o `tasksCounter` for igual a 1. Caso contrário, atribua o valor `tarefas`.
- const tasksCounterText = tasksCounter === 1 ? 'tarefa' : 'tarefas’

### Adicionando todo

- [x]  No componente `TodoInput.tsx`,  o estado `task` deverá ser usado na propriedade `value` do componente `TextInput`
- [x]  A função `setTask` que deve ser usada na propriedade `onChangeText` também do `TextInput`.

Implementar a função **handleAddNewTask no TodoInput.tsx**

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

function handleAddTask(*newTaskTitle*: *string*) {

- [x]  criar uma nova `task`
- [x]  gerar um `id` aleatório usando o método `new Date().getTime()`
- [x]  a propriedade `done` deve sempre ser iniciada com o valor `false`.

const newTask = {

id: **new** Date().getTime(),

title: newTaskTitle,

done: false,

}

- [x]  adicioná-la ao final do array `tasks` (respeitando o princípio da imutabilidade)

setTasks((*oldTasks*) => [...oldTasks, newTask])

- [x]  no componente `TasksList` tudo que você precisa fazer é descomentar a linha `data={tasks}`

### Removendo todo

- [x]  utilize o método `onPress` do botão e chame a propriedade `removeTask` passando como parâmetro o `id` do `item`

*onPress*={() => removeTask(item.id)}

- [x]  Na página `Home.tsx`, você vai precisar implementar a lógica do `handleRemoveTask`

function handleRemoveTask(*id*: *number*) {

const updatedTasks = tasks.filter((*task*) => task.id !== id)

setTasks(updatedTasks)

}
