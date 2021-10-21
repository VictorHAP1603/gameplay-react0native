import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 24
  },

  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },

  containerStatus: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 12
  },

  statusColor: {
    height: 8,
    width: 8,
    marginRight: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },

  on: {
    backgroundColor: theme.colors.on,
  },

  off: {
    backgroundColor: theme.colors.primary,
  },

  status: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
    textTransform: 'capitalize'
  },
});
