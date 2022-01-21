import React from "react";

import {
    Container,
    Selected,
    Icon,
} from './styles'

interface CategoryTransactionProps {
    selected: string,
    onPress: () => void
}

export function CategoryTransaction({ selected, onPress }: CategoryTransactionProps) {
    return (
        <Container onPress={onPress}>
            <Selected>{selected}</Selected>
            <Icon name='chevron-down' />
        </Container>
    )
}