import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import Tags from "react-native-tags";

const { width, height } = Dimensions.get("window");

const SIZES = {
  width,
  height,
};

export default function FormScreen({ route, navigation }) {
  const [contactInfo, setContactInfo] = React.useState({});
  const [isNameHighlighted, setIsNameHighlighted] = React.useState(false);
  const [isCompanyHighlighted, setIsCompanyHighlighted] = React.useState(false);
  const [isPositionHighlighted, setIsPositionHighlighted] =
    React.useState(false);
  const [isEmailHighlighted, setIsEmailHighlighted] = React.useState(false);
  const [isContactHighlighted, setIsContactHighlighted] = React.useState(false);
  const [isAddressHighlighted, setIsAddressHighlighted] = React.useState(false);
  const [isWebHighlighted, setIsWebHighlighted] = React.useState(false);
  const [isHashHighlighted, setIsHashHighlighted] = React.useState(false);
  const [isRemarkHighlighted, setIsRemarkHighlighted] = React.useState(false);
  const [initialTags, setInitialTags] = React.useState([]);
  const [initialText, setInitialText] = React.useState("");

  React.useEffect(() => {
    let { item } = route.params;

    setContactInfo(item);
  });

  const renderTag = ({ tag, index, onPress, deleteTagOnPress, readonly }) => {
    return (
      <TouchableOpacity
        key={`${tag}-${index}`}
        onPress={onPress}
        style={styles.tag}
      >
        <Text style={styles.textTag}>{tag}</Text>
        <Image
          style={styles.icClear}
          source={require("../assets/images/icons.clear.png")}
        />
      </TouchableOpacity>
    );
  };

  function onTagPress(index, tagLabel, event, deleted) {}

  function onChangeTags(tags) {
    setInitialTags(tags);
  }

  //  Contact Area
  function renderContactInfo() {
    return (
      <View style={styles.contactContainer}>
        <View style={styles.contactTopWrap}>
          <View style={{ flexDirection: "row", marginLeft: 20 }}>
            <Image
              source={contactInfo.photo}
              resizeMode="contain"
              style={{
                width: 50,
                height: 55,
                borderRadius: 100,
              }}
            />
            <View style={{ marginLeft: 10, marginBottom: 10 }}>
              <Text style={styles.contactHeader}>{contactInfo.name}</Text>
              <Text style={styles.contactSpan_1}>{contactInfo.profession}</Text>
              <Text style={styles.contactSpan}>{contactInfo.company}</Text>
              <Text style={styles.contactSpan}>09765653421</Text>
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
        </View>
      </View>
    );
  }

  // Verify Forms
  function renderVerifyInfo() {
    return (
      <View style={styles.verifyContainer}>
        <Text style={styles.detailHeader}>Verify Details</Text>

        <View style={{ padding: 5 }}>
          <Text style={styles.InputText}>Full Name</Text>
          <View
            style={
              isNameHighlighted ? styles.foucsedInputView : styles.inputView
            }
          >
            <TextInput
              style={styles.TextInput}
              placeholder="Enter your name"
              placeholderTextColor="#aba9a9"
              onFocus={() => {
                setIsNameHighlighted(true);
              }}
              onBlur={() => {
                setIsNameHighlighted(false);
              }}
            />
          </View>
        </View>

        <View style={{ padding: 5 }}>
          <Text style={styles.InputText}>Company Name</Text>
          <View
            style={
              isCompanyHighlighted ? styles.foucsedInputView : styles.inputView
            }
          >
            <TextInput
              style={styles.TextInput}
              placeholder="Enter your company"
              placeholderTextColor="#aba9a9"
              onFocus={() => {
                setIsCompanyHighlighted(true);
              }}
              onBlur={() => {
                setIsCompanyHighlighted(false);
              }}
            />
          </View>
        </View>

        <View style={{ padding: 5 }}>
          <Text style={styles.InputText}>Position</Text>
          <View
            style={
              isPositionHighlighted ? styles.foucsedInputView : styles.inputView
            }
          >
            <TextInput
              style={styles.TextInput}
              placeholder="Enter your position"
              placeholderTextColor="#aba9a9"
              onFocus={() => {
                setIsPositionHighlighted(true);
              }}
              onBlur={() => {
                setIsPositionHighlighted(false);
              }}
            />
          </View>
        </View>

        <View style={{ padding: 5 }}>
          <Text style={styles.InputText}>Email</Text>
          <View
            style={
              isEmailHighlighted ? styles.foucsedInputView : styles.inputView
            }
          >
            <TextInput
              style={styles.TextInput}
              placeholder="Enter your email"
              placeholderTextColor="#aba9a9"
              onFocus={() => {
                setIsEmailHighlighted(true);
              }}
              onBlur={() => {
                setIsEmailHighlighted(false);
              }}
            />
          </View>
        </View>

        <View style={{ padding: 5 }}>
          <Text style={styles.InputText}>Contact Number</Text>
          <View
            style={
              isContactHighlighted ? styles.foucsedInputView : styles.inputView
            }
          >
            <TextInput
              style={styles.TextInput}
              placeholder="Enter your ph number"
              placeholderTextColor="#aba9a9"
              onFocus={() => {
                setIsContactHighlighted(true);
              }}
              onBlur={() => {
                setIsContactHighlighted(false);
              }}
            />
          </View>
        </View>

        <View style={{ padding: 5 }}>
          <Text style={styles.InputText}>Company Address</Text>
          <View
            style={
              isAddressHighlighted ? styles.foucsedInputView : styles.inputView
            }
          >
            <TextInput
              multiline
              numberOfLines={5}
              style={styles.TextInput}
              placeholder="Enter your Company Address"
              placeholderTextColor="#aba9a9"
              onFocus={() => {
                setIsAddressHighlighted(true);
              }}
              onBlur={() => {
                setIsAddressHighlighted(false);
              }}
            />
          </View>
        </View>

        <View style={{ padding: 5 }}>
          <Text style={styles.InputText}>Web</Text>
          <View
            style={
              isWebHighlighted ? styles.foucsedInputView : styles.inputView
            }
          >
            <TextInput
              style={styles.TextInput}
              placeholder="Enter your Company Website"
              placeholderTextColor="#aba9a9"
              onFocus={() => {
                setIsWebHighlighted(true);
              }}
              onBlur={() => {
                setIsWebHighlighted(false);
              }}
            />
          </View>
        </View>
        <View style={{ padding: 5 }}>
          <Text style={styles.InputText}>HashTags(for searching use)</Text>
          <View
            style={
              isHashHighlighted ? styles.foucsedInputView : styles.inputView
            }
            onFocus={() => {
              setIsHashHighlighted(true);
            }}
            onBlur={() => {
              setIsHashHighlighted(false);
            }}
          >
            <Tags
              containerStyle={styles.container}
              initialText={initialText}
              textInputProps={{
                placeholderTextColor: "#aba9a9",
                placeholder: "HashTags",
              }}
              inputStyle={styles.input}
              initialTags={initialTags}
              onChangeTags={onChangeTags}
              onTagPress={onTagPress}
              renderTag={renderTag}
              createTagOnReturn={true}
            />
          </View>
        </View>

        <View style={{ padding: 5 }}>
          <Text style={styles.InputText}>Remarks</Text>
          <View
            style={
              isRemarkHighlighted ? styles.foucsedInputView : styles.inputView
            }
          >
            <TextInput
              multiline
              numberOfLines={5}
              style={styles.TextInput}
              placeholder="Enter remarks"
              placeholderTextColor="#aba9a9"
              onFocus={() => {
                setIsRemarkHighlighted(true);
              }}
              onBlur={() => {
                setIsRemarkHighlighted(false);
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {renderContactInfo()}
        {renderVerifyInfo()}

        {/* Button Area */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.CancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.SaveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contactContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#d7d8d9",
    marginLeft: 10,
    marginRight: 10,
    marginTop: Platform.OS === "android" ? 50 : 10,
    height: SIZES.height * 0.2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: "#fff",
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
  contactSpan_1: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    color: "#000",
  },
  contactSpan: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "#525050",
  },
  contactTopWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    paddingTop: 40,
  },

  verifyContainer: {
    flex: 1,
    marginTop: 20,
  },
  detailHeader: {
    fontFamily: "Roboto-Bold",
    fontSize: 25,
    padding: 20,
  },
  InputText: {
    color: "#5d8764",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginLeft: 10,
  },
  inputView: {
    // height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flexDirection: "row",
    borderColor: "#dcdedc",
    borderRadius: 10,
  },

  foucsedInputView: {
    // height: 40,
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
  tag: {
    backgroundColor: "#9cffb6",
    padding: 5,
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textTag: {
    color: "#000",
  },
  input: {
    backgroundColor: "#FFFFFF",
    color: "#606060",
    fontWeight: "bold",
  },
  icClear: {
    width: 15,
    height: 15,
    tintColor: "#000",
    marginLeft: 30,
  },
  buttonContainer: {
    margin: 20,
    borderTopColor: "#c7c5c5",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  saveButton: {
    width: "45%",
    padding: 15,
    backgroundColor: "#8c9959",
    alignItems: "center",
    borderRadius: 8,
  },
  cancelButton: {
    width: "45%",
    padding: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#8c9959",
  },
  CancelText: {
    color: "#8c9959",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  SaveText: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
