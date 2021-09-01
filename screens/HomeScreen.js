import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Searchbar from "../shared/SearchBar";
import { Icon } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const SIZES = {
  width,
  height,
};

export default function HomeScreen({ navigation }) {
  const burger_restaurant_1 = require("../assets/images/burger-restaurant.jpg");
  const burger_restaurant_2 = require("../assets/images/burger-restaurant-2.jpg");
  const chicago_hot_dog = require("../assets/images/chicago-hot-dog.jpg");
  const crispy_chicken_burger = require("../assets/images/crispy-chicken-burger.jpg");
  const fries_restaurant = require("../assets/images/fries-restaurant.jpg");
  const hawaiian_pizza = require("../assets/images/hawaiian-pizza.jpg");
  const avatar_6 = require("../assets/images/avatar-6.jpg");
  const avatar_7 = require("../assets/images/avatar-7.jpg");

  const info = [
    {
      id: 1,
      name: "Hen",
      photo: burger_restaurant_1,
    },
    {
      id: 2,
      name: "Ken",
      photo: burger_restaurant_2,
    },
    {
      id: 3,
      name: "Thin",
      photo: chicago_hot_dog,
    },
    {
      id: 4,
      name: "Aung",
      photo: crispy_chicken_burger,
    },
    {
      id: 5,
      name: "Zaw",
      photo: fries_restaurant,
    },
    {
      id: 5,
      name: "Zaw",
      photo: hawaiian_pizza,
    },
  ];

  const contactInfo = [
    {
      id: 1,
      name: "Goh Cheng Yi Michelle",
      company: "Amazon Pte Ltd",
      profession: "Managing Director",
      photo: avatar_6,
    },
    {
      id: 2,
      name: "Angela Teo Swee Lin",
      company: "Innovigency Creatives Pte Ltd",
      profession: "Finance Manager",
      photo: avatar_7,
    },
  ];

  const scrollX = new Animated.Value(0);
  const [value, setValue] = useState();
  function updateSearch(value) {
    //do your search logic or anything
    setValue(value);
  }

  // TopInfo Area
  function renderInfo() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {info?.map((item, index) => (
          <View key={`menu-${index}`} style={{ alignItems: "center" }}>
            <View
              style={{
                height: SIZES.height * 0.2,
                paddingRight: 10,
                marginTop: 20,
                marginBottom: 20,
                paddingLeft: 10,
              }}
            >
              {/* Food Image */}
              <Image
                source={item.photo}
                resizeMode="cover"
                style={{
                  width: SIZES.width * 0.65,
                  height: "100%",
                  borderRadius: 10,
                  borderColor: "#474646",
                  borderWidth: 1,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  right: 15,
                  top: 8,
                }}
              >
                <Icon
                  name="file"
                  color="#fff"
                  type="font-awesome"
                  size={10}
                  containerStyle={{
                    backgroundColor: "#000",
                    padding: 5,
                    borderRadius: 50,
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: 25,
                  width: SIZES.width * 0.65,
                  left: 10,
                  backgroundColor: "#474646",
                }}
              >
                <View style={{ flexDirection: "row", width: "100%" }}>
                  <View style={styles.overlayText_1}>
                    <Text style={{ color: "#fff", fontSize: 12 }}>QRCod</Text>
                    <Icon
                      name="qrcode"
                      color="#000"
                      type="font-awesome"
                      size={11}
                      containerStyle={{
                        backgroundColor: "#fff",
                        padding: 5,
                        borderRadius: 50,
                        width: 20,
                        height: 20,
                      }}
                    />
                  </View>

                  <View style={styles.overlayText_2}>
                    <Text style={{ color: "#fff", fontSize: 12 }}>Shar</Text>
                    <Icon
                      name="share"
                      color="#000"
                      type="font-awesome"
                      size={10}
                      containerStyle={{
                        backgroundColor: "#fff",
                        padding: 5,
                        borderRadius: 50,
                        width: 20,
                        height: 20,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  // Animated Dots
  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width * 0.65);

    return (
      <View style={{ height: 30 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: 10,
          }}
        >
          {info.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });

            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [6.4, 10, 6.4],
              extrapolate: "clamp",
            });

            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: ["#898C95", "#FC6D3F", "#898C95"],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: 30,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  // Contacts Area
  function renderContacts() {
    return (
      <View>
        {renderDots()}
        <View style={styles.contactContainer}>
          <View style={{ padding: 10, paddingBottom: 5 }}>
            <Text style={styles.contactText}>My Contacts</Text>
          </View>
          {contactInfo?.map((item, index) => (
            <TouchableOpacity
              key={`menu-${index}`}
              style={styles.contactTopWrap}
              onPress={() =>
                navigation.navigate("FormScreen", {
                  item,
                })
              }
            >
              <View style={{ flexDirection: "row", marginLeft: 20 }}>
                <Image
                  source={item.photo}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 55,
                    borderRadius: 100,
                  }}
                />
                <View style={{ marginLeft: 10, marginBottom: 10 }}>
                  <Text style={styles.contactHeader}>{item.name}</Text>
                  <Text style={styles.contactSpan}>{item.company}</Text>
                  <Text style={styles.contactSpan}>{item.profession}</Text>
                </View>
              </View>

              <View style={{ marginRight: 20, marginTop: 5 }}>
                <Icon
                  name="chevron-right"
                  color="#cfcaca"
                  type="font-awesome"
                  size={25}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

  // QR code
  function renderQRCode() {
    return (
      <View style={styles.QRcontainer}>
        <View style={styles.QRwarp}>
          <View style={{ flexDirection: "row", marginLeft: 30, marginTop: 10 }}>
            <Icon name="qrcode" color="#000" type="font-awesome" size={40} />
            <View style={{ marginLeft: 10, marginTop: 5 }}>
              <Text style={styles.contactHeader}>My QR Code</Text>
            </View>
          </View>

          <View style={{ marginRight: 20, marginTop: 20 }}>
            <Icon
              name="chevron-right"
              color="#cfcaca"
              type="font-awesome"
              size={25}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView stlye={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="bars" color="#000" size={25} />
        <Text style={styles.headerText}>Home</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Searchbar value={value} updateSearch={updateSearch} />
      </View>

      {renderInfo()}
      {renderContacts()}
      {renderQRCode()}

      {/* Button Area */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.ButtonText}>Scan QR To Add Friend</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginLeft: 20,
    marginTop: Platform.OS === "android" ? 50 : 0,
    flexDirection: "row",
  },
  headerText: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    marginLeft: 20,
  },
  overlayText_1: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRightColor: "#fff",
    borderRightWidth: 1,
    height: 25,
  },
  overlayText_2: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 25,
  },
  contactContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#c7c5c5",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    height: "auto",
  },
  contactText: {
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontSize: 20,
  },
  contactHeader: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    fontWeight: "bold",
  },
  contactSpan: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "#918e8e",
  },
  contactTopWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#c7c5c5",
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 8,
  },

  QRcontainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#c7c5c5",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 18,
    height: "auto",
  },
  QRwarp: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    width: SIZES.width * 0.95,
    padding: 15,
    backgroundColor: "#8c9959",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 30,
  },
  ButtonText: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
