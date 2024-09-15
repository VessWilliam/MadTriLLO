import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useObject } from "@realm/react";
import { Task } from "../models/Task";
import { BSON } from "realm";

const TaskDetail = () => {
  const { id } = useLocalSearchParams(); // Fetch ID from URL params
  const task = useObject<Task>(Task, new BSON.ObjectID(id as string)); // Fetch Task from Realm

  return (
    <View style={{ padding: 10 }}>
      {!task ? (
        <Text style={{ color: "white", fontSize: 20 }}>
          Task not found or still loading...
        </Text>
      ) : (
        <>
          <Text style={{ color: "white", fontSize: 30 }}>
            {task.description}
          </Text>
          <Text style={{ color: "gray", fontSize: 20 }}>
            Completed: {task.isComplete ? "Yes" : "No"}
          </Text>
          <Text style={{ color: "gray", fontSize: 20 }}>
            Created At: {task.createdAt?.toDateString()}
          </Text>
        </>
      )}
    </View>
  );
};

export default TaskDetail;
