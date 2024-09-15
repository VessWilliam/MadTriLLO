import React from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import TaskListIComponents from "./TaskListIComponents";
import { useRealm, useQuery } from "@realm/react";
import { Task } from "../models/Task";

const TaskList = () => {
  const realm = useRealm();
  const tasks = useQuery(Task);

  const [newTask, setNewTask] = useState("");

  const createTask = () => {
    console.warn("create", newTask);
    
    realm.write(() =>{
      realm.create(Task, {description: newTask, user_id:'123' })
    })

    setNewTask("");
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Todo</Text>

      {/* {task list item} */}
      <FlatList
        data={tasks}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <TaskListIComponents task={item} />}
      />

      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholder="New Task"
        placeholderTextColor="gray"
        style={style.input}
      />

      <Button title="Add Task" onPress={createTask} />
    </View>
  );
};

const style = StyleSheet.create({
  container: { backgroundColor: "gray", padding: 10, borderRadius: 5, gap: 5 },
  title: {
    marginVertical: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
  },
  input: {
    color: "white",
    padding: 15,
    backgroundColor: "#141414",
  },
});

export default TaskList;
