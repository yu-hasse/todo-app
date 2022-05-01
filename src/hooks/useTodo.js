import { useState, useEffect } from "react";
import { ulid } from "ulid";
import * as todoData from "../server/todos"

//useTodoカスタムフックを作成
export const useTodo = () => {
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        // コンポーネントのマウント後orアンマウント後に処理を実行
        todoData.getAllTodosData().then((todo) => {
            // Todoを追加した順に表示する
            setTodoList([...todo].reverse())
        })
    }, [])

    // 完了/未完了のトグル
    const toggleTodoListItemStatus = (id, done) => {

        const todoItem = todoList.find((item) => item.id === id)

        //合致したTodoのdoneを反転する
        const newTodoItem = { ...todoItem, done: !done }
        // トグルしたtodoItemを更新して、todoListも更新する
        todoData.updateTodoData(id, newTodoItem).then((targetTodo) => {
            const newTodoList = todoList.map((item) =>
                item.id !== targetTodo.id ? item : targetTodo
            )

            setTodoList(newTodoList)
        })
    }

    // 新規TODOの追加
    const addTodoListItem = (todoContent) => {
        const newItem = {
            content: todoContent,
            id: ulid(),
            done: false
        }

        return todoData.addTodoData(newItem).then((addTarget) => {
            setTodoList([addTarget, ...todoList])
        })
    }

    // TODOの削除
    const deleteTodoListItem = (id) => {
        todoData.deleteTodoData(id).then((deleteTarget) => {
            const newTodoList = todoList.filter(
                //idが一致した場合削除
                (item) => item.id !== deleteTarget
            )
            setTodoList(newTodoList)
        })
    }

    return {
        todoList,
        toggleTodoListItemStatus,
        addTodoListItem,
        deleteTodoListItem
    }
}