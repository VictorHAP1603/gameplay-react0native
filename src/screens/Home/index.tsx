import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./style";

// Components
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";

export const Home = () => {
  const [category, setCategory] = useState("1");
  const navigation = useNavigation();

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 ás 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },

    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 ás 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  function handleCategoryActive(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd activeOpacity={0.7} />
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategoryActive}
        />

        <View style={styles.content}>
          <ListHeader title="Partidas Agendas" subtitle="Total 6" />

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            style={styles.matches}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
            renderItem={({ item }) => (
              <Appointment onPress={handleAppointmentDetails} data={item} />
            )}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
};
