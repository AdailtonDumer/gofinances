import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface BtnProps extends RectButtonProps{
    title : string,
    onPress: () => void,
}

export function Button({ title, ...rest } : BtnProps){
    return(
        <Container {...rest}>
            <Title>{title}</Title>
        </Container>
    );
}