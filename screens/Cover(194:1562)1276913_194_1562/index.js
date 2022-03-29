import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_194_1571}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cda/34b1/e1d2d1ce302a86c25b7f730ad22d16ef"
          }}
          style={styles.ImageBackground_194_1563}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c998/0f8d/e67c068449042059200ea5f6fa4d010e"
          }}
          style={styles.ImageBackground_194_1564}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c91/bddf/ced5971a38633569d7c516d71dbed2ea"
          }}
          style={styles.ImageBackground_194_1565}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f4b/2449/9675383fefe2adab2aab9a91bcd149ee"
          }}
          style={styles.ImageBackground_194_1566}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d5e/5a0e/c54f8a6122a75c0ae18dcd4490eccb24"
          }}
          style={styles.ImageBackground_194_1567}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5a7/dd3d/3d9f17cfeeb78a96e4c4609819f7a335"
          }}
          style={styles.ImageBackground_194_1568}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/287a/5e34/d39dd3039565e74ce870e850c95a8a86"
          }}
          style={styles.ImageBackground_194_1569}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2faf/7b24/84d8a1bde236f166e7fadfb7b2d2eb63"
          }}
          style={styles.ImageBackground_194_1570}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(233, 233, 233, 1)" },
  View_2: { height: hp("100%") },
  View_194_1571: {
    width: wp("137%"),
    minWidth: wp("137%"),
    height: hp("185%"),
    minHeight: hp("185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-21%"),
    top: hp("-42%")
  },
  ImageBackground_194_1563: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("22%"),
    resizeMode: "cover"
  },
  ImageBackground_194_1564: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("19%"),
    resizeMode: "cover"
  },
  ImageBackground_194_1565: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("16%"),
    resizeMode: "cover"
  },
  ImageBackground_194_1566: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("12%"),
    resizeMode: "cover"
  },
  ImageBackground_194_1567: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("98%"),
    resizeMode: "cover"
  },
  ImageBackground_194_1568: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("95%"),
    resizeMode: "cover"
  },
  ImageBackground_194_1569: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("91%"),
    resizeMode: "cover"
  },
  ImageBackground_194_1570: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("88%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
