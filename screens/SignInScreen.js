import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  CheckBox,
  SafeAreaView,
  Dimensions,
  Platform,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";

const { width, height } = Dimensions.get("window");

const SIZES = {
  width,
  height,
};

export default function SignInScreen({ navigation }) {
  const [isSelected, setSelection] = React.useState(false);

  const [isEHighlighted, setIsEHighlighted] = React.useState(false);
  const [isPHighlighted, setIsPHighlighted] = React.useState(false);

  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const handleEmailChange = (val) => {
    setData({
      ...data,
      email: val,
    });
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  function navigate() {
    if (data.email == "" || data.password == "") {
      alert("Please Enter Email and Password");
    } else {
      navigation.navigate("HomeScreen");
    }
  }

  async function facebookLogin() {
    try {
      await Facebook.initializeAsync({
        appId: "566921147788600",
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile"],
        });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
        setTimeout(() => navigation.navigate("HomeScreen"), 1000);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  async function signInWithGoogle() {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "1055570120786-fhrfifpe09evdjm543apbgel8k6nr600.apps.googleusercontent.com",
        iosClientId:
          "1055570120786-lncf4g6gpnfntv7b0t62i127isubu05a.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        alert("Sign in successful");
        setTimeout(() => navigation.navigate("HomeScreen"), 1000);
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* header Image  */}
      <Image
        style={styles.image}
        source={require("../assets/images/headerImg.jpg")}
        resizeMode="cover"
      />

      <View style={{ paddingLeft: 10 }}>
        <Text style={styles.WelcomeText}>Welcome!</Text>
      </View>

      {/* Sign In Form */}
      <View>
        <Text style={styles.InputText}>Email Address</Text>
        <View
          style={isEHighlighted ? styles.foucsedInputView : styles.inputView}
        >
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#aba9a9"
            onFocus={() => {
              setIsEHighlighted(true);
            }}
            onBlur={() => {
              setIsEHighlighted(false);
            }}
            onChangeText={(val) => handleEmailChange(val)}
          />
        </View>
      </View>

      <View>
        <Text style={styles.InputText}> Password</Text>
        <View
          style={isPHighlighted ? styles.foucsedInputView : styles.inputView}
        >
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#aba9a9"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
            onFocus={() => {
              setIsPHighlighted(true);
            }}
            onBlur={() => {
              setIsPHighlighted(false);
            }}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
            style={{ marginTop: 5 }}
          >
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: "#8c9959", false: "#000" }}
        />
        <Text style={{ margin: 8, color: "#919191", fontWeight: "bold" }}>
          Keep me logged in
        </Text>
      </View>

      {/* Button */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <TouchableOpacity style={styles.button} onPress={navigate}>
          <Text style={styles.ButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Options */}

      <View style={styles.Signup}>
        <Text style={styles.SignupText}>
          <Text style={{ fontSize: 16, color: "#919191" }}>
            Don't have an account?
          </Text>
          <Text style={{ fontSize: 16, color: "#8c9959", fontWeight: "bold" }}>
            Sign Up
          </Text>
        </Text>
        <Text style={{ fontSize: 16, color: "#8c9959", fontWeight: "bold" }}>
          Forgot Password?
        </Text>
      </View>

      <View style={styles.Options}>
        <View style={styles.bar}></View>
        <Text style={{ marginTop: 10, color: "#919191" }}>Or Sign Up With</Text>
        <View style={styles.bar}></View>
      </View>

      <View style={styles.icon}>
        <TouchableOpacity style={styles.iconButton} onPress={facebookLogin}>
          <FontAwesome name="facebook" color="#4267B2" size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={signInWithGoogle}>
          <FontAwesome name="google" color="#4285F4" size={25} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 40 : 10,
  },

  image: {
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    width: SIZES.width,
  },
  WelcomeText: {
    fontFamily: "Roboto-Bold",
    fontSize: 25,
    marginBottom: 18,
  },
  InputText: {
    color: "#5d8764",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginLeft: 10,
  },
  inputView: {
    margin: 10,
    borderWidth: 1,
    padding: 10,
    flexDirection: "row",
    borderColor: "#dcdedc",
    borderRadius: 10,
  },

  foucsedInputView: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flexDirection: "row",
    borderColor: "#a2a3a2",
    borderRadius: 10,
  },

  TextInput: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 10,
  },
  button: {
    width: SIZES.width * 0.95,
    padding: 15,
    backgroundColor: "#8c9959",
    alignItems: "center",
    borderRadius: 8,
  },
  ButtonText: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  Signup: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  SignupText: {
    marginBottom: 14,
  },
  Options: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bar: {
    flex: 1,
    borderBottomColor: "#a3a3a3",
    borderBottomWidth: 1,
    width: "100%",
    margin: 10,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    margin: "auto",
  },
  iconButton: {
    width: "30%",
    padding: 10,
    borderColor: "#a3a3a3",
    alignItems: "center",
    borderRadius: 5,
    margin: 10,
    borderWidth: 1,
  },
});
