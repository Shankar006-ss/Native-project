import React from "react";
import { Image, StatusBar, StyleSheet, View ,Text} from "react-native";
import { color} from "@/Utility/Constants";


const HSB = () => (
  <View>
    <StatusBar
      translucent
      backgroundColor={color.BLACK}
      barStyle="light-content"
    />
     <View style={styles.header}>
     {/* <Image
              style={styles.logo}
              source={require("../../../../Image/home.png")}
            /> */}
            <Image
              style={styles.icon}
              source={require("../../../../Image/bell.png")}
            />
     </View>
    
  </View>
);

const styles = StyleSheet.create({
  // home header styles
  header: {
    alignItems:"flex-end",
    flexDirection: "row",
    justifyContent:"space-between",
    marginTop: 20,
    backgroundColor: color.HOME,
  },
  //logo image styles
  logo:{
    margin:20,
    height:40,
    width:40
  },
  icon:{
    margin:20,
    height:40,
    width:40
  },
  
});

export default HSB;
