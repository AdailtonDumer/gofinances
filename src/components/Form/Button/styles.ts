import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 18px;
    border-radius: 5px;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium}
`;