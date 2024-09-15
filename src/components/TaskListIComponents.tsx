import { Text, StyleSheet, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Link } from "expo-router";
import { Task } from "../models/Task";
import { useRealm } from "@realm/react";

const TaskListIComponents = ({ task }: { task: Task }) => {
  const realm = useRealm();

  const deleteTask = () => {
    realm.write(() => realm.delete(task));
  };

  return (
    <Link href={`/${task._id}`} asChild>
      <Pressable style={styles.container}>
        <Text style={styles.text}>{task.description}</Text>
        <AntDesign
          onPress={deleteTask}
          name="close"
          style={styles.icon}
          size={15}
          color="white"
        />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 15,
  },
  icon: {
    paddingTop: 3,
  },
});

export default TaskListIComponents;
