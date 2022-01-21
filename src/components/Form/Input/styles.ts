import { TextInput } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.shape};
    padding: 18px 16px;
    border-radius: 5px;
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    margin-bottom: 8px;
`;