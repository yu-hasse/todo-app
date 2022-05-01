import axios from "axios";

const mockURL = "http://localhost:3100/todos"

// サーバ上のすべてのTodoを取得
export const getAllTodosData = async () => {
    const response = await axios.get(mockURL)

    return response.data
}

// 新規Todoを追加する
export const addTodoData = async (todo) => {
    const response = await axios.post(mockURL, todo)

    return response.data
}

// Todoを削除する キーはid
export const deleteTodoData = async (id) => {
    await axios.delete(`${mockURL}/${id}`)

    return id
}

// Todoを更新する キーはid
export const updateTodoData = async (id, todo) => {
    const response = await axios.put(`${mockURL}/${id}`, todo)

    return response.data
}
