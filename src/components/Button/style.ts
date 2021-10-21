import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    marginLeft: "auto",
    marginRight: "auto",

    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    textAlign: "center",
    fontSize: 15,
  },
});
