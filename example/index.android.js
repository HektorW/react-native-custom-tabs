import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  ToolbarAndroid,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import {
  CustomTabs,
  ANIMATIONS_SLIDE,
  ANIMATIONS_FADE,
} from "react-native-custom-tabs";

export default class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#455A64"} />
        <ToolbarAndroid
          title={"React Native Custom Tabs"}
          titleColor={"#FFFFFF"}
          style={styles.toolbar}
        />
        <View style={styles.textArea}>
          <Text style={styles.welcome}>Click on the link below!</Text>
          <TouchableHighlight
            underlayColor={"#CFD8DC"}
            onPress={() => this.openCustomizedCustomTabs()}>
            <Text style={styles.link}>https://www.google.com</Text>
          </TouchableHighlight>
          <Text>(Customized Look & Feel)</Text>
          <TouchableHighlight
            underlayColor={"#CFD8DC"}
            onPress={() => this.openDefaultCustomTabs()}
            style={{ marginTop: 8 }}>
            <Text style={styles.link}>https://www.google.com</Text>
          </TouchableHighlight>
          <Text>(Default Look & Feel)</Text>
          <TouchableHighlight
            underlayColor={"#CFD8DC"}
            onPress={() => this.errorOccur()}
            style={{ marginTop: 8 }}>
            <Text style={styles.link}>https://www.google.com</Text>
          </TouchableHighlight>
          <Text>(Error occur)</Text>
        </View>
      </View>
    );
  }

  openCustomizedCustomTabs() {
    this.openGoogle({
      toolbarColor: "#607D8B",
      enableUrlBarHiding: true,
      showPageTitle: true,
      enableDefaultShare: true,
      animations: ANIMATIONS_FADE,
      // animations: {
      //   startEnter: 'slide_up',
      //   startExit: 'android:anim/fade_out',
      //   endEnter: 'android:anim/fade_in',
      //   endExit: 'slide_down',
      // },
      forceCloseOnRedirection: true,
    });
  }

  openDefaultCustomTabs() {
    this.openGoogle();
  }

  errorOccur() {
    this.openGoogle("https://www.google.com", {
      //toolbarColor: '607D8B', // <--- Invalid toolbar color.
      enableUrlBarHiding: "#607D8B", // <-- Type Error.
    });
  }

  openGoogle(option) {
    CustomTabs.openURL("https://www.google.com", option)
      .then(launched => {
        console.log(`Launched custom tabs: ${launched}`);
      })
      .catch(err => {
        console.warn("An error occurred", err);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  link: {
    color: "crimson",
  },
  toolbar: {
    backgroundColor: "#607D8B",
    height: 56,
  },
});

AppRegistry.registerComponent("Example", () => Example);
