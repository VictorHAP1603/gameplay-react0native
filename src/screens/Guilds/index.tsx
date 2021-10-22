import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./style";

import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

export const Guilds = ({ handleGuildSelected }: Props) => {
  const guilds = [
    {
      id: "1",
      name: "Lendário",
      icon: "image.png",
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
};
