import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
  },

  containerStatus: {
    flexDirection: "row",
  },

  statusColor: {
    height: 9,
    width: 9,
    marginRight: 8,
    backgroundColor: theme.colors.primary,
    // borderRadius: 10,
  },

  status: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
});
