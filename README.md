DESAFIO COMPLEMENTAR 

PASSO A PASSO 

### Exibir alerta ao tentar adicionar todo com o mesmo nome

- [x]  Editar o `Home.tsx`, na função `handleAddTask`, buscar em `tasks` um todo com o título que você deseja cadastrar (utilize a variável `newTaskTitle` e o método `find`).

```tsx
function handleAddTask(*newTaskTitle*: *string*) {

//verifica se já existe a tarefa com mesmo titulo

const taskSameWithTitle = tasks.find((*task*) => task.title === newTaskTitle)

if (taskSameWithTitle) return

Alert.alert(

'Task já cadastrada',

'Você não pode cadastrar uma task com o mesmo nome',

)
```

### Exibir alerta pedindo confirmação ao remover um todo

- [x]  Na função `handleRemoveTask`, criar um `Alert` com duas opções: `Não` caso o usuário não queira remover o item e `Sim` caso ele queira remover o item. No caso de `Sim`, coloque no `onPress` a lógica que você já tinha no `handleRemoveTask`. Para o título do `Alert`, utilize `Remover item` e para a mensagem `Tem certeza que você deseja remover esse item?`

```tsx
//Remove uma tarefa

function handleRemoveTask(*id*: *number*) {

Alert.alert('Remover item', 'Tem certeza que você deseja remover esse item?', 

	[{
	style: 'cancel',
	text: 'Não',
		}, 
	{

style: 'destructive',
text: 'Sim',

onPress: () => {
const updatedTasks = tasks.filter((*task*) => task.id !== id)
setTasks(updatedTasks)

				},
			},
		],
	)
}
```

### Edição todo

- [x]  Para implementar a edição de um todo os arquivos que deve você editar são `Home.tsx`, `TasksList.tsx` e `TaskItem.tsx`. Na página `Home.tsx`, você deve criar uma função chamada `handleEditTask`. Essa função receberá como argumento um objeto com duas propriedades: `taskId` será do tipo `number` e representa o `id` da `task` que você deseja editar. A segunda propriedade é a `taskNewTitle` que será do tipo `string` e representa o novo `title` que você deseja atribuir à task. Você pode utilizar a mesma lógica do `handleToogleTaskDone` (de buscar a task e atualizar um valor dela), mas lembrando de alterar a propriedade `title` em vez da `done`.

```tsx
//Edita uma tarefa

function handEditTask({ *taskId*, *taskNewTitle* }: *EditTaskArgs*) {

const updatedTasks = tasks.map((*task*) => ({ ...task })) //busca todas as tarefas do array

const taskToBeUpdated = updatedTasks.find((*task*) => task.id === taskId) //busca tarefa concluida

if (!taskToBeUpdated) return    //se não existir tarefa return

taskToBeUpdated.title = taskNewTitle       //se existir altera o title

setTasks(updatedTasks)    //atualiza o estado

}
```

- [x]  Além disso, você deve repassar essa função para o seu `TasksList` como uma prop de nome `editTask` (por enquanto vai acusar erro já que você ainda não adicionou essa função na interface  `TasksListProps`).

*editTask*={handEditTask} 

- [x]  remover algumas lógicas e estilizações para o novo componente que você irá criar: `TaskItem.tsx`. abstraia do `TasksList.tsx` toda a lógica relacionada a um `item`, ou seja, desde o que você renderiza no `renderItem` (com exceção do `ItemWrapper`) até as funções que um `item` utiliza.
- [x]  No componente `TaskItem.tsx`, você deve criar dois estados e uma ref:
1. O primeiro estado é para sinalizar se o item está sendo editado ou não. Utilize o `useState` e inicie o valor dele como `false`;
    
    <aside>
    💡 const [isEditing, setIsEditing] = useState(false);
    
    </aside>
    

1. O segundo estado é para salvar o valor editado do item. Utilize o `useState` e inicie o valor dele como `task.title` (valor original do item);
    
    <aside>
    💡 const [taskNewTitleValue, setTaskNewTitleValue] = useState(task.title)
    
    </aside>
    
2. A referência é para você manipular manualmente se o item está sendo editado ou não. Utilize a seguinte linha para criar uma ref 

`const textInputRef = useRef<TextInput>(null)`

- [x]  Após essa etapa, chegou a hora de criar as funções que vão lidar com as edições no seu item. Você deve criar três funções:

1. `handleStartEditing`: função responsável por iniciar a edição do item. Você deve setar como `true` o estado que indica se a edição está ocorrendo.

```tsx
function handleStartEditing() {
setIsEditing(true) //seta o campo a ser editado
}
```

2.`handleCancelEditing`: função responsável por cancelar a edição e recuperar o valor original do item. Você deve setar `task.title` (valor original) no estado que armazena o valor editado do item. Além disso, sete como `false` o estado que indica se a edição está ocorrendo.

```tsx
function handleCancelEditing() {

setTaskNewTitleValue(task.title) //ao cancelar volta para o valor orginal

setIsEditing(false)

}
```

3.`handleSubmitEditing`: função responsável por confirmar a edição do item. Você deve chamar a função `editTask` passando o `task.id`  e o estado que armazena o valor editado do item. Por fim, setar como `false` o estado que indica se a edição está ocorrendo.

```tsx
function handleSubmitEditing() {

editTask({ taskId: task.id, taskNewTitle: taskNewTitleValue })

setIsEditing(false)

}
```

- [x]  criar um `useEffect` que irá monitorar a alteração do estado que indica se está ocorrendo a edição ou não. Se o estado for `true`, realizar o `focus` (basicamente abrir o teclado e colocar o cursor) manualmente no item para realizar a edição. Caso contrário, realizar o `blur` (fechar o teclado e retirar o cursor).

```tsx
useEffect(() => {
 if (textInputRef.current) {
 if (isEditing) {
 textInputRef.current.focus();
  }   else {
textInputRef.current.blur();
   } 
  }
 },  [isEditing])
```

- [x]  Você irá substituir o `Text` que renderiza o título da tarefa por um `TextInput` que irá ter as seguintes propriedades:
1.  **value**: Valor do `TextInput`. Informe nessa propriedade o estado que armazena o valor editado do item.
2. **onChangeText**: Função que captura as alterações do `TextInput`. Informe nessa propriedade o `set` do estado que armazena o valor editado do item.
3. **editable**: Indica se o `TextInput` aceita edições. Informe nessa propriedade o valor do estado que indica se está ocorrendo a edição.
4. **onSubmitEditing**: Função que executa quando o usuário clica no botão de envio (confirmação) do teclado. Informe nessa propriedade a função `handleSubmitEditing`.
5. **style**: Estilização do `TextInput`. Informe nessa propriedade a mesma estilização do `Text` segue o código: `task.done ? styles.taskTextDone : styles.taskText`
6. **ref**: Referência para o `TextInput`. Informe nessa propriedade a referência `textInputRef` criada nos passos anteriores.

```tsx
<TextInput  
  value={taskNewTitleValue}
	onChangeText={setTaskNewTitleValue}
  editable={isEditing}  
  onSubmitEditing={handleSubmitEditing}
  style={ task.done ? styles.taskTextDone : styles.taskText}
	ref={textInputRef}
/>
```

- [X]  Alterar a renderização do seu ícone de lixeira (segundo `TouchableOpacity` para seguir a seguinte estrutura: uma `View` para ser o `container` dos ícones
1. Você irá alterar a renderização do seu ícone de lixeira (segundo `TouchableOpacity` para seguir a seguinte estrutura: uma `View` para ser o `container` dos ícones. Dentro da `View`, você terá:
    1. Uma condição baseada no estado que indica se está ocorrendo edição ou não. Se estiver ocorrendo, renderize um `TouchableOpacity` que mostra o ícone `X` e no método `onPress` informe a função `handleCancelEditing`. Caso não esteja ocorrendo a edição, renderize um `TouchableOpacity` que mostra o ícone de lápis (recomendamos exportar o ícone do layout do Figma) e no método `onPress` informe a função `handleStartEditing`.
        
        <aside>
        ⚠️ Caso tenha dúvidas de como exibir esses dois ícones na sua aplicação, dê uma olhada no exemplo abaixo. Basicamente você deve utilizar o `Icon` importado do `react-native-vector-icons` para renderizar o `X` e utilizar o `Image` passando o caminho da imagem para renderizar o lápis (você precisa exportar o ícone do Figma, mas caso tenha dúvidas dê uma olhada no vídeo de dicas)
        
        </aside>
        
    2. Uma `View` com 1 pixel de largura, 24 de altura e cor `rgba(196, 196, 196, 0.24)` para funcionar com um divisor entre os ícones.
    3. Um `TouchableOpacity` que mostra o ícone de lixeira. No método `onPress` informe a função `handleRemoveTask`. Desative o botão caso esteja editando o item (trabalhe com a prop `disabled` e o estado que informe se a edição está ocorrendo). Além disso, se o item estiver sendo editado altere o `opacity` dele para `0.2`, caso contrário deixe `1`.
        - Exemplo de código
            
            ```tsx
            <View style={ styles.iconsContainer } >
              { isEditing ? (
                <TouchableOpacity
                  onPress={handleCancelEditing}
                >
                  <Icon name="x" size={24} color="#b2b2b2" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={handleStartEditing}
                >
                  <Image source={editIcon} />
                </TouchableOpacity>
              ) }
            
              <View 
                style={ styles.iconsDivider }
              />
            
              <TouchableOpacity
                disabled={isEditing}
                onPress={() => removeTask(task.id)}
              >
                <Image source={trashIcon} style={{ opacity: isEditing ? 0.2 : 1 }} />
              </TouchableOpacity>
            </View>
            ```
