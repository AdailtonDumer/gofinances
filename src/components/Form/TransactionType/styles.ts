import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native-gesture-handler";

interface TypeTransaction {
    type: 'income' | 'outcome'
}

interface Active {
    type: 'income' | 'outcome'
    active: boolean
}

export const Container = styled(TouchableOpacity) <Active>`
    width: 48%;

    border: 1px solid ${({ theme }) => theme.colors.text};
    flex-direction: row;
    padding: 16px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 8px;

    ${({ active, type }) =>
        active ?
            type === 'income' ?
                css`
                    background-color: ${({ theme }) => theme.colors.success_ligth};
                    border: none;
               `
            :
                css`
                    background-color: ${({ theme }) => theme.colors.attention_light};
                    border: none;
                `
        : null
    }
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(Feather) <TypeTransaction>`
    font-size: ${RFValue(24)}px;
    margin-right: 10px;

    color: ${({ theme, type }) =>
        type === 'income' ? theme.colors.success
            : theme.colors.attention
    }
`;
