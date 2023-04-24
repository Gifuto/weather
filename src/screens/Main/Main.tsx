import { FC, PropsWithChildren } from "react"

import { Search } from "./components"

import { Container } from "./styled"

interface MainProps {}

export const Main: FC<PropsWithChildren<MainProps>> = () => {

    return (
        <Container>
            <Search/>
        </Container>
    )
}