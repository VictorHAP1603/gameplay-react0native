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
  const isOnline = data.status === 'online';

  return (
    <View style={styles.container}>
      <Avatar urlImg={data.avatar_url} />

      <View>
        <Text style={styles.title}>{data.username}</Text>

        <View style={styles.containerStatus}>
          <View style={[styles.statusColor, isOnline ? styles.on : styles.off]} />
          <Text style={styles.status}> {isOnline ? 'Disponível' : 'Ocupado'} </Text>
        </View>
      </View>
    </View>
  );
};
