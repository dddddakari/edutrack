import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";


const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      {/* Profile Section with Required Profile Picture*/}
      <TouchableOpacity style={styles.profileSection}>
        <Image source={require("@/assets/images/placeholder.jpg")} style={styles.profileImage} />
        <Text style={styles.signInText}>Sign in or Sign up</Text>
        <Ionicons name="chevron-forward" size={20} color={Colors} />
      </TouchableOpacity>
      
      {/* Settings List */}
      <View style={styles.settingsList}>
      <SettingsItem icon="settings-outline" label="General" />
        <SettingsItem icon="diamond-outline" label="Pricing" />
        <SettingsItem icon="musical-notes-outline" label="Sounds & Notifications" />
        <SettingsItem icon="time-outline" label="Date & Time" />
      </View>
      
      {/* Other Sections */}
      <View style={styles.settingsList}>
        <SettingsItem icon="help-circle-outline" label="Help & Feedback" />
        <SettingsItem icon="people-outline" label="Follow Us" />
        <SettingsItem icon="information-circle-outline" label="About" />
      </View>
    </View>
  );
};

const SettingsItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.settingsItem}>
    <Ionicons name={icon} size={24} color="#58355E" />
    <Text style={styles.settingsLabel}>{label}</Text>
    <Ionicons name="chevron-forward" size={20} color="#58355E" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#D4D2D5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  signInText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "semibold",
    color: "#58355E"
  },
  settingsList: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  settingsLabel: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SettingsScreen;
