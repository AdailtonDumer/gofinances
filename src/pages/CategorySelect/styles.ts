import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface CategoryProps {
    active: boolean
}

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: rgba(52, 45, 49, 0.8);
    justify-content: flex-end;
`;

export const Body = styled.View`
    height: 90%;
    background-color: ${({ theme }) => theme.colors.background};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(80)}px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;
`;
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const CatrgoryItem = styled.TouchableOpacity<CategoryProps>`
    flex-direction: row;
    width: 100%;
    padding: 12px;
    ${({ active }) => active && css`
        background-color: ${({ theme }) => theme.colors.secondary_light};
    `}
`;

export const CategoryIcon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: 12px;
`;

export const CategoryName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
    width: 100%;
    padding: 24px
`;
