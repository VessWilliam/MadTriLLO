import { View, StyleSheet } from "react-native";
import React from "react";
import TaskList from "./TaskList";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const TaskBoard = () => {
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#8711c1", "#2472fc"]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaProvider>
        <SafeAreaView>
          <TaskList />
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
};

export default TaskBoard;
