import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import React from "react";
import ActionSheetPage from './ActionSheetExample'
const AppNavigator = StackNavigator(
    {
        Page: { screen: ActionSheetPage },
    }
);
export default () =>
    <Root>
        <AppNavigator />
    </Root>;