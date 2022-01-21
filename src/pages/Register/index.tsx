import React, { useState } from "react";
import { Modal } from "react-native";

import { Button } from "../../components/Form/Button";
import { CategoryTransaction } from "../../components/Form/CatgoryTransaction";
import { Input } from "../../components/Form/Input";
import { TransactionType } from "../../components/Form/TransactionType";
import { CategorySelect } from "../CategorySelect";
import {
    Container,
    Header,
    HeaderTitle,
    Form,
    Fields,
    TransactionTypes,
} from "./styles";

export function Register() {
    const [transactionType, setTransactionType] = useState<'income'|'outcome'>()
    const [modalCategoryOpen, setModalCategoryOpen] = useState(false);
    const [category, setCategory] = useState({
        key:'category',
        name:'Categoria'
    })

    function handleToggleModalOpen(){
        setModalCategoryOpen(!modalCategoryOpen)
    }

    function handleChangeType(type : 'income' | 'outcome'){
        setTransactionType(type);
    }

    return (
        <Container>
            <Header>
                <HeaderTitle>
                    Cadastro
                </HeaderTitle>
            </Header>

            <Form>
                <Fields>
                    <Input
                        placeholder="Nome"
                    />
                    <Input
                        placeholder="Nome"
                    />
                    <TransactionTypes>
                        <TransactionType 
                         active = {transactionType === 'income'}
                         title="Income"
                         type="income"
                         onPress={() => handleChangeType('income')}
                        />
                        <TransactionType 
                         active = {transactionType === 'outcome'}
                         title="Outcome"
                         type="outcome" 
                         onPress={() => handleChangeType('outcome')}
                        />
                    </TransactionTypes>
                    <CategoryTransaction onPress={handleToggleModalOpen} selected={category.name}/>
                </Fields>
                <Button title="Enviar" />
            </Form>

            <Modal 
                transparent
                animationType="slide" 
                visible={modalCategoryOpen} 
                statusBarTranslucent>
                <CategorySelect
                    category={category}
                    closeSelectCategory={handleToggleModalOpen}
                    setCategory={setCategory}
                />
            </Modal>

        </Container>
    );
}