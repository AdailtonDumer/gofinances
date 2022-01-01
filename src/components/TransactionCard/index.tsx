import React from 'react';

import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
} from './styles'

interface CategoryProp {
    name: string,
    icon: string
}

export interface TransactionCardProps {
    type: 'income' | 'outcome'
    title: string,
    amount: string,
    category: CategoryProp,
    date: string
}

export function TransactionCard({ type, title, amount, category, date }: TransactionCardProps) {
    return (
        <Container>
            <Title>{title}</Title>
            <Amount type={type}>
                {!(type !== 'outcome') && '- ' }
                {amount}
            </Amount>

            <Footer>
                <Category>
                    <Icon name={category.icon} />
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <Date>{date}</Date>
            </Footer>
        </Container>
    )
}