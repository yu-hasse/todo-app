import { Textarea, Button } from "@chakra-ui/react"

// TodoAddコンポーネント作成
export const TodoAdd = ({ placeholder, leftIcon, buttonText, inputElm, handleAddTodoListItem }) => {
    return (
        <>
            <Textarea placeholder={placeholder} bgColor="white" mt="8" borderColor="gray.400" ref={inputElm} />

            <Button onClick={handleAddTodoListItem} colorScheme="blue" leftIcon={leftIcon} mt="8">{buttonText}</Button>
        </>
    )
}