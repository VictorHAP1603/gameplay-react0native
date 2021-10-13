import React from "react";
import { Text, View } from "react-native";

import { styles } from "./style";

import { Avatar } from "../Avatar";

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

export const Member = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <Avatar urlImg={data.avatar_url} />

      <View>
        <Text style={styles.title}>{data.username}</Text>

        <View style={styles.containerStatus}>
          <View style={styles.statusColor} />
          <Text style={styles.status}></Text>
        </View>
      </View>
    </View>
  );
};
