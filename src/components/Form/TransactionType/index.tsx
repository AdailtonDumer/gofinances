import React from "react";
import { TouchableOpacityProps } from "react-native";

import { 
    Container, 
    Title, 
    Icon,
 } from "./styles";

interface TransactionTypeProps extends TouchableOpacityProps{
    title: string,
    type: 'income' | 'outcome',
    active: boolean
}

const icon = {
    income : 'arrow-up-circle',
    outcome: 'arrow-down-circle'
}

export function TransactionType({ title, type, active, ...rest}: TransactionTypeProps){
    return (
        <Container 
            {...rest} 
            type={type}
            active={active}
        >
            <Icon  name={icon[type]} 
            type={type}
            />
            <Title>
                {title}
            </Title>
        </Container>
    );
}