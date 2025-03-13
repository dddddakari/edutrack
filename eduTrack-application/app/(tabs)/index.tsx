import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Fab from "@/components/edubutton";

const InboxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inbox</Text>
      
      <View style={styles.content}>
        <Ionicons name="grid" size={60} color="#17C3B2" />
        <Text style={styles.title}>New Tasks</Text>
        <Text style={styles.description}>
            It's time to set a new task! Start Now!
        </Text>
        
        <TouchableOpacity style={styles.newTaskButton}>
          <Ionicons name="add-circle" size={20} color="#17C3B2" />
          <Text style={styles.newTaskText}>New Inbox Task</Text>
        </TouchableOpacity>
      </View>

      <Fab 
            onPress={() => console.log('Create new post')}
            tabBarHeight={40}
          />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4D2D5",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    textAlign: "center",
    color: "#666",
    marginVertical: 10,
  },
  newTaskButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#7bede2",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  newTaskText: {
    color: "#17C3B2",
    fontWeight: "bold",
    marginLeft: 5,
  },
  Fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    color: "#17C3B2",
  },
});

export default InboxScreen;