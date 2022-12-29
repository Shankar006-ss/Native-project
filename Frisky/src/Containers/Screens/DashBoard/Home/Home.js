import * as React from 'react';
import { useEffect } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { homescreen } from "@/Utility/Constants";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/Hooks';
import { setDefaultTheme } from '@/Store/Theme';
import { Appearance } from 'react-native';

//Themes
const ListItem = ({ item }) => {
  const { Common, Fonts, Gutters } = useTheme()
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
  const { t } = useTranslation()
  return (
    <View style={Gutters.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={Gutters.itemPhoto}
        resizeMode="cover"
      />
      <Text style={[Fonts.itemText, Common.itemText]}>{item.text}</Text>
    </View>
  );
};

export default () => {
  const { Common, Fonts, Gutters } = useTheme()
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
  //Rendering
  return (
    <View style={[Gutters.container, Common.container]}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={[Gutters.sectionHeader, Fonts.sectionHeader, Common.sectionHeader]}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
  {
    title: homescreen.TRENDING,
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Aniruth romantic hits",
        uri: "https://a10.gaanacdn.com/gn_pl_img/playlists/ZaP37OR3Dy/P374pvevWD/size_m_1606805633.webp",
      },
      {
        key: "2",
        text: "A R Rahman hits",
        uri: "https://m.media-amazon.com/images/I/61-DP+EXhHL._SX355_.jpg",
      },
      {
        key: "3",
        text: "Hip hop Adhi",
        uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1130637b-ff57-48b5-b8d6-bfe756c7af58/ddfyqy1-3657f3ec-c511-47e9-b5a4-470fb40076e1.jpg/v1/fill/w_1024,h_1024,q_75,strp/hiphop_tamizha_fanmade__by_kajandra_ddfyqy1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzExMzA2MzdiLWZmNTctNDhiNS1iOGQ2LWJmZTc1NmM3YWY1OFwvZGRmeXF5MS0zNjU3ZjNlYy1jNTExLTQ3ZTktYjVhNC00NzBmYjQwMDc2ZTEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.SwN4OGq6LkjOT2C9uoNldWQuv5sIwF9FLPpxxTf1YpA",
      },
      {
        key: "4",
        text: "Ilayaraja melody",
        uri: "https://a10.gaanacdn.com/gn_pl_img/playlists/XzVWRyL3dq/VWRv5pMeWd/size_m_1515081240.webp",
      },
      {
        key: "5",
        text: "Anuradha hits",
        uri: "https://1601606126.rsc.cdn77.org/raagaimg/r_img/250/t/tc0000508-1.jpg",
      },
    ],
  },
  {
    title: homescreen.RECENT,
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Gv.Prakash hits",
        uri: "https://raaga.gumlet.io/raagaimg/r_img/250/t/tc0001224-2.jpg?w=240&dpr=2.6",
      },
      {
        key: "2",
        text: "Sid sriram tamil hits",
        uri: "https://i.scdn.co/image/ab67706c0000bebbd275d0f7c811dfd6d911cf2d",
      },

      {
        key: "3",
        text: "Stephen hits",
        uri: "https://media-images.mio.to/by_artist/S/Stephen%20Zechariah/One%20Love%20One%20Life%20%282020%29/Art-350.jpg",
      },
      {
        key: "4",
        text: "Hits of shreya",
        uri: "https://c.saavncdn.com/356/Shreya-Ghoshal-Hits-Malayalam-2020-20200512124913-500x500.jpg",
      },
      {
        key: "5",
        text: "Dhanush latest hits",
        uri: "https://raaga.gumlet.io/raagaimg/r_img/250/t/tc0001364.jpg?w=240&dpr=2.6",
      },
    ],
  },

];

const styles = StyleSheet.create({


});
