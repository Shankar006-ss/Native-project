import React from "react";
import { StyleSheet, Text, TouchableOpacity, View,Appearance } from "react-native";
import { color, navigations, screenText } from "@/Utility/Constants";
import { useTranslation } from "react-i18next";
import { useTheme } from '@/Hooks';
import { useEffect } from "react";
import { setDefaultTheme } from '@/Store/Theme'

export default function Account({ navigation }) {
  const {t}=useTranslation()
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
  return (
    <View style={[Gutters.sub_container,Fonts.sub_container,Common.sub_container]}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.replace(navigations.SIGNIN_SCREEN)}
          style={styles.button}
        >
          <Text style={[Fonts.buttontext,Common.buttontext]}>{t('screenText.LOG_OUT')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 //button style 
  button: {
   marginTop: 100,
    margin: 110,
    padding: 15,
    borderRadius: 25,
  },
});
