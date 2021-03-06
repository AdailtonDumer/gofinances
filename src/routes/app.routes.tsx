import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons'


import { Dashboard } from '../pages/Dashboard';
import { Register } from '../pages/Register';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    const theme = useTheme()
    
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon'
            }}
            
        >
            <Screen
                name='Listagem'
                component={Dashboard}
                options = {{ 
                    tabBarIcon: (({color, size}) => 
                        <MaterialIcons name='format-list-bulleted' size={size} color={color}/>
                    ) 
                }}
            />

            <Screen
                name='Cadastrar'
                component={Register}
                options = {{ 
                    tabBarIcon: (({color, size}) => 
                        <MaterialIcons name='attach-money' size={size} color={color}/>
                    ) 
                }}
            />

            <Screen
                name='Resumo'
                component={Register}
                options = {{ 
                    tabBarIcon: (({color, size}) => 
                        <MaterialIcons name='pie-chart' size={size} color={color}/>
                    ) 
                }}
            />
        </Navigator>
    )
}