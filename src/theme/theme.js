import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        //グローバルスタイルの追加や上書き
        global: {
            body: {
                backgroundColor: "orange.50",
                color: "gray.800",
            },
            p: {
                fontSize: { base: "md", md: "lg" },
                lineHeight: "tall"
            }
        }
    }
})

export default theme