import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { theme } from "../global/styles/theme";

import { AuthRoutes } from "./Auth.routes";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.secondary100,
  },
};

export function Routes() {
  return (
    <NavigationContainer theme={MyTheme}>
      <AuthRoutes />
    </NavigationContainer>
  );
}
