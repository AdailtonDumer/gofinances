import React from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

import { Input } from "../Input";
import { Container, Error } from "./styles";

interface ControlledInputProps extends TextInputProps {
    control: Control,
    name: string,
    error: string
}

export function ControlledInput({ control, name, error, ...rest }: ControlledInputProps) {
    return (
        <Container>
            {error && <Error>{error}</Error>}
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
            />
        </Container>
    )
}