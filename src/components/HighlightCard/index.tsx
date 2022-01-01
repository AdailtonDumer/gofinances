import React from "react";

import { 
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,
 } from './styles'

interface Props {
    title: string,
    amount: string,
    subText: string,
    type: 'income'|'outcome'|'total'
}

const icon = {
    income: 'arrow-up-circle',
    outcome: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function HighlightCard({ title, amount, subText, type } : Props){
    return (
        <Container type= {type}>
            <Header>
                <Title type= {type}>{title}</Title>
                <Icon type={type} name={icon[type]}/>
            </Header>
            <Footer>
                <Amount type= {type}>{amount}</Amount>
                <LastTransaction type= {type}>{subText}</LastTransaction>
            </Footer>
        </Container>
    )
}