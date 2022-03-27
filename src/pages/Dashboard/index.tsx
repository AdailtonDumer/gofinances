import React from 'react';
import { ListRenderItem, ListRenderItemInfo } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreetings,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionsList,
    LogoutButton
} from './styles';

export interface TransactionCardData extends TransactionCardProps {
    id: string
}

export function Dashboard() {
    const data: TransactionCardData[] = [
        {
            id: '1',
            type: 'income',
            title: 'Desenvolvimento de site',
            amount: 'R$ 15000,00',
            category: { name: 'vendas', icon: 'dollar-sign' },
            date: '12/01/2022',
        },
        {
            id: '2',
            type: 'outcome',
            title: 'Lanche',
            amount: 'R$ 150,00',
            category: { name: 'Alimentação', icon: 'coffee' },
            date: '12/01/2022',
        },
        {
            id: '3',
            type: 'outcome',
            title: 'Aluguel',
            amount: 'R$ 500,00',
            category: { name: 'Casa', icon: 'home' },
            date: '12/01/2022',
        },
    ]

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://github.com/AdailtonDumer.png' }} />
                        <User>
                            <UserGreetings>Olá,</UserGreetings>
                            <UserName>Adailton</UserName>
                        </User>
                    </UserInfo>
                    <LogoutButton onPress={() => {console.log('teste')}}>
                        <Icon name='power' />
                    </LogoutButton>
                </UserWrapper>
            </Header>
            <HighlightCards>
                <HighlightCard amount="R$1500,00" title='Entrada' subText='Ultima transação em 13 de abril' type='income' />
                <HighlightCard amount="R$1500,00" title='Saída' subText='Ultima transação em 13 de abril' type='outcome' />
                <HighlightCard amount="R$1500,00" title='Total' subText='Ultima transação em 13 de abril' type='total' />
            </HighlightCards>
            <Transactions>
                <Title>Listagem</Title>
                <TransactionsList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard {...item} />}
                />
            </Transactions>
        </Container>
    )
}


