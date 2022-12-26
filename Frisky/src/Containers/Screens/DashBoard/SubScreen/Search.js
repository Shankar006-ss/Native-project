import React from "react";
import { StyleSheet, Text, View , Appearance} from "react-native";
import { color,screenText  } from "@/Utility/Constants";
import { useTranslation } from "react-i18next";
import { useTheme } from '@/Hooks';
import { useEffect } from "react";
import { setDefaultTheme } from '@/Store/Theme'

const Search = () => {
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
      <Text style={[Fonts.buttontext,Common.buttontext]}>{t('screenText.COMING_SOON')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Search;
