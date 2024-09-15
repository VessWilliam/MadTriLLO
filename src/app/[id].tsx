import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const TaskDetail = () => {
  const { id } = useLocalSearchParams();
  console.warn(id);
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ color: "white", fontSize: 20 }}>Id: {id}</Text>
    </View>
  );
};

export default TaskDetail;
