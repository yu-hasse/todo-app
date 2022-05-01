import React, { useRef } from "react"
import { Container } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { useTodo } from "../hooks/useTodo"
import { TodoTitle } from "./TodoTitle"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

function App() {
  const { todoList, addTodoListItem, toggleTodoListItemStatus, deleteTodoListItem } = useTodo()

  const inputElm = useRef(null)

  const handleAddTodoListItem = () => {
    if (inputElm.current.value === "") return

    addTodoListItem(inputElm.current.value)
    inputElm.current.value = ""
  }

  console.log("TODOリスト:", todoList)

  // 状態管理されているtodoListの配列の中から未完了のtodoだけで新しく配列を作成する
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done
  })

  // 状態管理されているtodoListの配列の中から完了のtodoだけで新しく配列を作成する
  const completedList = todoList.filter((todo) => {
    return todo.done
  })

  return (
    <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">

      <TodoTitle title="TODOリスト管理" as="h1" fontSize={{ base: "2xl", md: "3xl" }} />

      <TodoAdd placeholder="Add Todo" leftIcon={<AddIcon />} buttonText="+ TODOを追加するよー" inputElm={inputElm} handleAddTodoListItem={handleAddTodoListItem} />

      <TodoList todoList={inCompletedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} title="未完了のTODO" as="h2" fontSize={{ base: "xl", md: "2xl" }} />

      <TodoList todoList={completedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} title="完了のTODO" as="h2" fontSize={{ base: "xl", md: "2xl" }} />
    </Container>
  )
}

export default App;