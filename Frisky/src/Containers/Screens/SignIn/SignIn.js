import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Appearance
} from "react-native";
import {
  navigations,
} from "@/Utility/Constants";
import Validation from "@/Utility/Validation";
import { globalstyles } from "@/Common/Style";
import { useTranslation } from "react-i18next";
import { useTheme } from '@/Hooks';
import { useEffect } from "react";
import { setDefaultTheme } from '@/Store/Theme'
import { useCreatePostMutation } from "@/Services/modules/SigninAction";


export default function LogForm({ navigation }) {
  //Initialization
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPass, setCheckValidPass] = useState(false);
  const [t]=useTranslation()
  const { Common, Fonts, Gutters,Images} = useTheme()

  
  
//Themes
  const init = async () => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
      await setDefaultTheme({ darkMode: true });
    } else {
      await setDefaultTheme({ theme: 'default', darkMode: null });
    }
  }

  useEffect(() => {
    init()
  })

  
  

  //Api response
let grandType={
  Email:email,
  password:password
};
const[CreatePost]=useCreatePostMutation(grandType);
const onSubmit=()=>{
  CreatePost(grandType).then((response) => {
console.log(response)

if(response.data.Message=="Login Successfully"){
  navigation.navigate(navigations.HOME_SCREEN)
}
else{
  alert("Invalid data")
}
  })
}


  //check email validation
  const handleCheckEmail = (text) => {
    setEmail(text);
    if (Validation.validateEmail(email)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  //check password validation
  const checkPasswordValidity = (text) => {
    setPassword(text);
    if (Validation.validatePassword(password)) {
      setCheckValidPass(false);
    } else {
      setCheckValidPass(true);
    }
  };
  //Rendering
  return (
    <View style={globalstyles.container}>
      <StatusBar translucent backgroundColor="black" barStyle="light-content" />
      <ImageBackground
        source={require("../../../Image/background.jpg")}
        style={[Gutters.imageBackground, Common.imageBackground,Images.imageBackground]}
      >
        <View style={[Gutters.itemContainer]}>
          <View>
           
            <Text style={[Common.header,Fonts.header]}>{t('Signup.WELCOME')}</Text>
          </View>
          <View>
            <Image
              style={globalstyles.image}
              source={require("../../../Image/music-note.png")}
            />
          </View>
          <View style={[Gutters.inputText1]}>
            <TextInput
              style={[Gutters.textInput,Common.textInput,Fonts.textInput]}
              placeholder={t('placeholder.EMAIL')}
              value={email}
              onChangeText={handleCheckEmail}
            />
          </View>
          <View>
            {checkValidEmail ? (
              <Text style={globalstyles.Errormsg}>{t('ErrorMessage.EMAIL')}</Text>
            ) : null}
          </View>
          <View style={Gutters.inputText1}>
            <TextInput
              style={[Gutters.textInput,Common.textInput,Fonts.textInput]}
              placeholder={t('placeholder.PASSWORD')}
              value={password}
              onChangeText={(text) => checkPasswordValidity(text)}
              secureTextEntry={true}
            />
            {checkValidPass ? (
              <Text style={globalstyles.Errormsg}>{t('ErrorMessage.PASSWORD')}</Text>
            ) : null}
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
             // onPress={() => navigation.navigate(navigations.HOME_SCREEN)}
             onPress={() =>onSubmit()}
              // disabled={(checkValidEmail == true) || (checkValidPass == true) ||
              //   (password == "") || (email == "")}
            >
              <Text style={globalstyles.buttonText}>{t('screenText.LOG_IN')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={Gutters.footer}>
            <Text
              onPress={() => navigation.navigate(navigations.FORGOT_SCREEN)}
              style={[Gutters.footer1,Common.footer1,Fonts.footer1]}
            >
              {t('Signup.FORGOT_PASSWORD')}
            </Text>
            <Text
              onPress={() => navigation.navigate(navigations.SIGNUP_SCREEN)}
              style={[Gutters.footer2,Common.footer2,Fonts.footer2]}
            >
              {t('Signup.CREATE_ACCOUNT')}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

