import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Form/Button";
import { categories } from "../../utils/categories";
import {
    Container,
    Header,
    Title,
    CatrgoryItem,
    CategoryIcon,
    CategoryName,
    Separator,
    Footer,
    Body
} from "./styles";

interface Category {
    key: string,
    name: string
}

interface CategorySelectProps {
    category: Category,
    setCategory: (category: Category) => void,
    closeSelectCategory: () => void
}

export function CategorySelect({ category, setCategory, closeSelectCategory }: CategorySelectProps) {

    function handleSelectCategory(category: Category) {
        setCategory(category)
    }

    return (
        <Container>
            <Body>
                <Header>
                    <Title>
                        Categoria
                    </Title>
                </Header>

                <FlatList
                    data={categories}
                    style={{ flex: 1, width: '100%' }}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <CatrgoryItem active={category == item} onPress={() => handleSelectCategory(item)}>
                            <CategoryIcon name={item.icon} />
                            <CategoryName>{item.name}</CategoryName>
                        </CatrgoryItem>
                    )}

                    ItemSeparatorComponent={() => <Separator />}
                />
                <Footer>
                    <Button title="Selecionar" onPress={closeSelectCategory} />
                </Footer>
            </Body>
        </Container>
    );
}