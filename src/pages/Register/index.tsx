import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from "react-native";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from "../../components/Form/Button";
import { CategoryTransaction } from "../../components/Form/CatgoryTransaction";
import { ControlledInput } from "../../components/Form/ControlledInput";
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

interface FormData {
    name: string,
    amount: string
}

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Nome é obrigatório"),
    amount: yup.number()
        .typeError("Valor inválido")
        .positive("Insira um valor positivo")
        .required("Valor é obrigatório")
})

export function Register() {
    const [transactionType, setTransactionType] = useState<'income' | 'outcome'>()
    const [modalCategoryOpen, setModalCategoryOpen] = useState(false);
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    })

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleToggleModalOpen() {
        setModalCategoryOpen(!modalCategoryOpen)
    }

    function handleChangeType(type: 'income' | 'outcome') {
        setTransactionType(type);
    }

    function handleSubmitForm(form: FormData) {
        const { name, amount } = form;

        if (!transactionType)
            return Alert.alert(
                "Erro de validação",
                "Selecione um tipo para a transação (Entrada/Saída)"
            )

        if (category.key === "category")
            return Alert.alert(
                "Erro de validação",
                "Selecione uma categoria."
            )

        const data = {
            name,
            amount,
            transactionType,
            category: category.key
        }
        console.log(data)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <HeaderTitle>
                        Cadastro
                    </HeaderTitle>
                </Header>

                <Form>
                    <Fields>
                        <ControlledInput
                            name="name"
                            control={control}
                            autoCapitalize="characters"
                            autoCorrect={false}
                            placeholder="Nome"
                            error={errors.name && errors.name.message}
                        />
                        <ControlledInput
                            name="amount"
                            control={control}
                            placeholder="Valor"
                            keyboardType="decimal-pad"
                            returnKeyType="done"
                            error={errors.amount && errors.amount.message}
                        />
                        <TransactionTypes>
                            <TransactionType
                                active={transactionType === 'income'}
                                title="Entrada"
                                type="income"
                                onPress={() => handleChangeType('income')}
                            />
                            <TransactionType
                                active={transactionType === 'outcome'}
                                title="Saída"
                                type="outcome"
                                onPress={() => handleChangeType('outcome')}
                            />
                        </TransactionTypes>
                        <CategoryTransaction onPress={handleToggleModalOpen} selected={category.name} />
                    </Fields>
                    <Button
                        title="Enviar"
                        onPress={handleSubmit(handleSubmitForm)}
                    />
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
        </TouchableWithoutFeedback>
    );
}