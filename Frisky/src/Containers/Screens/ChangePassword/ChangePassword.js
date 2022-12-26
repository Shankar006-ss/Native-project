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
import { globalstyles } from "@/Common/Style";
import {
  color,
  navigations,
} from "@/Utility/Constants";
import Validation from "@/Utility/Validation";
import { useTranslation } from "react-i18next";
import { useTheme } from '@/Hooks';
import { useEffect } from "react";
import { setDefaultTheme } from '@/Store/Theme'

export default function Change({ navigation }) {
  //Intialization
  const [password, setPassword] = useState("");
  const [checkValidpass, setCheckValidPass] = useState(false);
  const [confirm, setPass] = useState("");
  const [checkValidConfirm, setCheckValidConfirm] = useState(false);
  const [t]=useTranslation()
  const { Common, Fonts, Gutters} = useTheme()

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

  //Password field validation
  const checkPasswordValidity = (text) => {
    setPassword(text);
    if (Validation.validatePassword(password)) {
      setCheckValidPass(false);
    } else {
      setCheckValidPass(true);
    }
  };
  //Confirm password validity
  const checkConfirmPasswordValidity = (text) => {
    setPass(text);
    if (password == text) {
      setCheckValidConfirm(false);
    } else {
      setCheckValidConfirm(true);
    }
  };
  //Rendering
  return (
    <ImageBackground
      source={require("../../../Image/background.jpg")}
      style={[Gutters.imageBackground, Common.imageBackground]}
      resizeMode="cover"
    >
      <View style={globalstyles.container}>
        <StatusBar
          translucent
          backgroundColor="black"
          barStyle="light-content"
        />
        <View>
          <Image
            style={globalstyles.image}
            source={require("../../../Image/music-note.png")}
          />
        </View>
        <Text style={[Gutters.change_title,Common.change_title]}>{t('screenText.CHANGE_TEXT')}</Text>
        <View style={Gutters.inputtext1}>
          <TextInput
            style={[Gutters.change_textInput,Fonts.change_textInput,Common.change_textInput]}
            placeholder={t('placeholder.NEW')}
            underlineColorAndroid={"transparent"}
            value={password}
            maxLength={16}
            onChangeText={(text) => checkPasswordValidity(text)}
            secureTextEntry={true}
          />
          {checkValidpass ? (
            <Text style={globalstyles.Errormsg}>{t('ErrorMessage.PASSWORD')}</Text>
          ) : null}
        </View>
        <View style={Gutters.change_inputtext2}>
          <TextInput
            style={[Gutters.change_textInput,Fonts.change_textInput,Common.change_textInput]}
            placeholder={t('placeholder.CONFIRM')}
            maxLength={16}
            onChangeText={(text) => checkConfirmPasswordValidity(text)}
            underlineColorAndroid={"transparent"}
            secureTextEntry={true}
          />
          {checkValidConfirm ? (
            <Text style={globalstyles.Errormsg}>
              {t('ErrorMessage.CONFIRMPASSWORD')}
            </Text>
          ) : null}
        </View>
        <View>
          <TouchableOpacity
            style={[Gutters.change_button,Common.change_button]}
            onPress={() => navigation.navigate(navigations.SIGNIN_SCREEN)}
            disabled={(checkValidpass == true) || (checkValidConfirm == true) ||
              (password == '') || (confirm == '')}
          >
            <Text style={globalstyles.buttonText}>
              {t('screenText.SAVE_TEXT')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  
});
