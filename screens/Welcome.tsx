import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import * as FileSystem from 'expo-file-system';

const Welcome = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const writeToFile = async (filename: string, content: string) => {
    try {
      const path = `${FileSystem.documentDirectory}${filename}`;
      await FileSystem.writeAsStringAsync(path, content);
    } catch (error) {
      console.error(`Error writing to ${filename}:`, error);
    }
  };

  const readFromFile = async (filename: string) => {
    try {
      const path = `${FileSystem.documentDirectory}${filename}`;
      return await FileSystem.readAsStringAsync(path);
    } catch (error) {
      console.error(`Error reading from ${filename}:`, error);
      return '';
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setLoginStatus(data.status);
  
      if (data.status === 'Placeholder') {
        navigation.navigate("Home");
      } else {
        Alert.alert("Login Status", data.status);
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert("Error", "Failed to connect to the server");
    }
  };

  return (
    <SafeAreaView style={styles.welcome}>
      <Image
        style={styles.backgroundIcon}
        contentFit="cover"
        source={require("../assets/background2.png")}
      />
      
      <LinearGradient
        style={styles.effect}
        locations={[1, 0]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
      />

      <View style={styles.content}>
        <View style={styles.text}>
          <Text style={styles.headerTitle}>Food Good</Text>
          <Text style={styles.caption}>Get Cookin'</Text>
        </View>
        <View style={styles.inputWrapper}>
          <Image 
            source={require("../assets/Message2.png")} 
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            placeholderTextColor={Color.neutral10}
          />
        </View>
        <View style={[styles.inputWrapper, styles.passwordInputWrapper]}>
          <Image 
            source={require("../assets/Lock2.png")} 
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            placeholderTextColor={Color.neutral10}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.label}>Login</Text>
          <Image
            style={styles.iconarrowRight}
            contentFit="cover"
            source={require("../assets/iconarrowright2.png")}
          />
        </TouchableOpacity>
        {loginStatus ? <Text style={styles.statusText}>{loginStatus}</Text> : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "120%",
    height: "120%",
    resizeMode: "cover",
  },
  effect: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headerTitle: {
    fontSize: FontSize.poppinsHeadingBold_size,
    lineHeight: 67,
    color: Color.white,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    textAlign: "center",
    marginBottom: 10,
  },
  caption: {
    fontSize: FontSize.textStyleNormalTextBold_size,
    lineHeight: 22,
    color: Color.neutral10,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    textAlign: "center",
  },
  text: {
    alignItems: "center",
    marginBottom: 40,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    borderColor: Color.white,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_base,
    marginBottom: 20,
    paddingLeft: 15, // Add left padding to make space for the icon
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: Color.white,
  },
  passwordInputWrapper: {
    marginTop: 20,
  },
  label: {
    fontSize: FontSize.textStyleNormalTextBold_size,
    lineHeight: 22,
    color: Color.white,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  iconarrowRight: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
  button: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colourStylesNeutralColourGray2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    marginTop: 20,
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 29,
    paddingBottom: 50, // Add some padding at the bottom
  },
  welcome: {
    flex: 1,
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 50,
  },
  statusText: {
    marginTop: 20,
    color: Color.white,
    fontSize: FontSize.textStyleNormalTextBold_size,
    textAlign: 'center',
  },
});

export default Welcome;