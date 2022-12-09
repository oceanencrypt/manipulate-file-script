var $module = {
 js_only_player_config : {
    "preset": "react-native",
    "fullscreen": true,
    "panes": [
      {
        "id": "player",
        "type": "player",
        "platform": "ios",
        "width": 260,
        "scale": 0.75,
        "prelude": "var bundle = window['react-navigation-bundle'];\n__VendorComponents.register('@react-navigation/native', { NavigationContainer: bundle.NavigationContainer });\n__VendorComponents.register('@react-navigation/stack', { createStackNavigator: bundle.createStackNavigator });",
        "modules": [
          {
            "name": "react-navigation-bundle",
            "url": "https://the-coder.s3.ap-south-1.amazonaws.com/js/react-navigation-bundle.js",
            "globalName": "react-navigation-bundle"
          },
          {
            "name": "tinylib",
            "url": "https://the-coder.s3.ap-south-1.amazonaws.com/tinylib.js",
            "globalName": "tinylib"
          }
        ]
      }
    ],
    "code": "",
    "files": {
      "Feed.js": "import React from 'react'\nimport {  View, Text, ScrollView, StyleSheet } from 'react-native'\nimport { createStackNavigator } from '@react-navigation/stack'\nimport { NavigationContainer } from '@react-navigation/native'\n\nconst Stack = createStackNavigator()\n\nimport { item } from './DATA'\nimport HomeFeed from './HomeFeed'\nimport Profile from './Profile'\n\nconst Feed = ({navigation, route}) => (\n  <ScrollView style={styles.feed_scroll} showsVerticalScrollIndicator={false}>\n    <HomeFeed item={item.home_feed} navigation={navigation} route={route}/>\n  </ScrollView>\n)\n\nexport default function App() {\n  return (\n  <NavigationContainer>\n    <Stack.Navigator>\n        <Stack.Screen name=\"Feed\" component={Feed} />\n        <Stack.Screen name=\"Profile\" component={Profile} />\n    </Stack.Navigator>.\n  </NavigationContainer>\n  )\n}\n\nconst styles = StyleSheet.create({\n  \n});",
      "HomeFeed.js": "import React from 'react'\nimport { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'\n\nimport HomeCarousel from './HomeCarousel'\n\n\n\n\n\nconst HomeFeed = ({ item, navigation, route }) => {\n  const homeFeedItem = ({ item }) => ( \n    <View style={styles.home_feed_item}>\n      <TouchableOpacity\n      activeOpacity={0.5}\n      onPress={() => {\n        navigation.push('Profile', { itemObj: item })\n      }}\n      >\n        <Text style={styles.artist_name}>{item.artist_name}</Text>\n      </TouchableOpacity>\n      <HomeCarousel item={item.home_carousel}/>\n      <Text style={styles.art_caption}>{item.art_caption}</Text>\n      <Text style={styles.art_description}>{item.art_description}</Text>\n    </View>\n  );\n  \n    return (\n<FlatList\n    style={styles.home_feed}\n    data={item}\n    renderItem={homeFeedItem}\n    keyExtractor={item => item.id}\n    showsVerticalScrollIndicator={false}\n    />\n  );\n};\n\nexport default HomeFeed;\n\nconst styles = StyleSheet.create({\nartist_name: {\n    color: 'hsl(274,100%,60%)',\n    fontSize: 15,\n    fontWeight: '400',\n    paddingHorizontal: 10,\n    paddingTop: 5\n  },\nart_caption: {\n    color: 'hsl(274,100%,60%)',\n    fontSize: 15,\n    fontWeight: '400',\n    paddingHorizontal: 10,\n    paddingTop: 5\n  },\nart_description: {\n    fontSize: 12,\n    fontWeight: '250',\n    paddingHorizontal: 10,\n    paddingTop:5\n  }\n});",
      "HomeCarousel.js": "import React from 'react'\nimport { Image, View, FlatList, StyleSheet } from 'react-native'\n\n\n\nconst homeCarouselItem = ({ item }) => (\n<View style={styles.home_carousel_item}>\n<Image\n    style={styles.art_photo}\n    source={{uri: item.art_photo}}\n    />\n</View>\n  );\n\nconst HomeCarousel = ({ item }) => (\n<FlatList\n    horizontal={true}\n    style={styles.home_carousel}\n    data={item}\n    renderItem={homeCarouselItem}\n    keyExtractor={item => item.id}\n    showsHorizontalScrollIndicator={false}\n    pagingEnabled={true}\n    />\n);\n\nexport default HomeCarousel;\n\nconst styles = StyleSheet.create({\nart_photo: {\n    width: '100vw',\n    height: '100vw',\n    marginTop: 5\n  }\n});",
      "Profile.js": "import React from 'react'\nimport { Image, Text, ScrollView, StyleSheet } from 'react-native'\n\nconst Profile = ({item, route}) => (\n<ScrollView style={styles.profile} showsVerticalScrollIndicator={false}>\n<Image\n    style={styles.artist_pic}\n    source={{uri: route.params.itemObj.artist_pic}}\n    />\n<Text style={styles.artist_bio}>{route.params.itemObj.artist_bio}</Text>\n<Text style={styles.artist_age}>{route.params.itemObj.artist_age}</Text>\n</ScrollView>\n)\n\nexport default Profile;\n\nconst styles = StyleSheet.create({\nartist_pic: {\n    width: '100vw',\n    height: '100vw',\n    marginTop: 5\n  },\nartist_bio: {\n    fontSize: 12,\n    fontWeight: '250',\n    paddingHorizontal: 10,\n    paddingTop:5\n  },\nartist_age: {\n    color: 'hsl(274,100%,60%)',\n    fontSize: 15,\n    fontWeight: '400',\n    paddingHorizontal: 10,\n    paddingTop: 5\n  }\n});",
      "DATA.js": "export const item = {\n    \"id\": \"d6671e7d-efbb-4abb-b52c-87b5db3410ea\",\n    \"home_feed\": [\n        {\n            \"id\": \"adcdb29d-292a-48ab-a1f1-4d2a4a1acc62\",\n            \"artist_pic\" : \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/30.png\",\n            \"artist_name\": \"note\",\n            \"artist_bio\": \"Language maintain bank fly age course trial while. Various possible prevent just treatment.\",\n            \"home_carousel\": [\n                {\n                    \"id\": \"b6911809-d865-4805-8abc-d256a4d308ce\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/41.png\"\n                },\n                {\n                    \"id\": \"87427175-eb98-4d2e-8a6d-22ac89da0757\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/305.png\"\n                },\n                {\n                    \"id\": \"d4e3f19a-2df2-4b28-97a8-10cb28f3d4a2\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/306.png\"\n                },\n                {\n                    \"id\": \"ad9cec95-9cbb-4c05-8096-524395165960\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/197.png\"\n                },\n                {\n                    \"id\": \"4e409ce9-2854-4323-b153-320a1c27af5f\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/297.png\"\n                }\n            ],\n            \"art_caption\": \"direction\",\n            \"art_description\": \"Line his cover customer. Organization quite manage enjoy worker.\",\n            \"artist_age\": 20\n        },\n        {\n            \"id\": \"473c1c34-b49c-49db-b374-e12d6ee62186\",\n            \"artist_pic\" : \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/35.png\",\n            \"artist_name\": \"consider\",\n            \"artist_bio\": \"Bag believe positive must scientist offer. Also card season central.\",\n            \"home_carousel\": [\n                {\n                    \"id\": \"6e3692c9-7323-4057-a528-5dbfe597da5d\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/28.png\"\n                },\n                {\n                    \"id\": \"ed933c35-a529-498c-87fb-948032ef9db1\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/339.png\"\n                },\n                {\n                    \"id\": \"53d3fc8b-3033-43d7-80e6-785e0580670f\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/225.png\"\n                },\n                {\n                    \"id\": \"b7fecaa4-eaa4-4d9b-a702-b7eb2a6db428\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/29.png\"\n                },\n                {\n                    \"id\": \"de501147-a252-4683-93bc-4b59d0834606\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/38.png\"\n                }\n            ],\n            \"art_caption\": \"focus\",\n            \"art_description\": \"Actually after career lose author system across. News already what part image society left always. Live region factor available every move.\",\n            \"artist_age\": 24\n        },\n        {\n            \"id\": \"848f48b5-b425-4f80-acd8-6ae0b6605241\",\n            \"artist_pic\" : \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/50.png\",\n            \"artist_name\": \"seat\",\n            \"artist_bio\": \"Age sell cover major happen size. His five million piece story pass card. Theory want job exactly term future leg check.\",\n            \"home_carousel\": [\n                {\n                    \"id\": \"2efdd52c-28c9-45ee-9c01-93a21f89c8cd\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/166.png\"\n                },\n                {\n                    \"id\": \"cbd46cc1-7bb1-4264-b955-1ce090a72001\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/89.png\"\n                },\n                {\n                    \"id\": \"87382725-650a-463d-9784-772a3c4108a0\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/53.png\"\n                },\n                {\n                    \"id\": \"7f1f5129-197f-4fd4-bff6-4172c45da967\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/260.png\"\n                },\n                {\n                    \"id\": \"a30c55f9-415d-4ae7-9ce0-6aaeb2121495\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/156.png\"\n                }\n            ],\n            \"art_caption\": \"crime\",\n            \"art_description\": \"Establish gun issue decision future fast. Yeah base magazine evidence scientist ask perform.\",\n            \"artist_age\": 27\n        }\n    ]\n}"
    },
    "styles": {
      "tab": { "backgroundColor": "rgb(250,250,250)" },
      "header": {
        "backgroundColor": "rgb(250,250,250)",
        "boxShadow": "rgba(0, 0, 0, 0.2) 0px 1px 1px",
        "zIndex": 9
      },
      "headerText": { "color": "#AAA", "fontWeight": "normal" },
      "transpilerHeader": {
        "backgroundColor": "rgb(240,240,240)",
        "boxShadow": "rgba(0, 0, 0, 0.2) 0px 1px 1px",
        "zIndex": 9
      },
      "transpilerHeaderText": { "color": "#888", "fontWeight": "normal" },
      "tabText": { "color": "#AAA" },
      "tabTextActive": {
        "color": "#333",
        "borderBottomColor": "rgb(59, 108, 212)"
      },
      "playerPane": {
        "overflow": "hidden",
        "background": "rgb(250, 250, 250)",
        "marginLeft": "0",
        "marginRight": "0",
        "paddingLeft": "10px",
        "paddingRight": "10px"
      },
      "consolePane": { "backgroundColor": "white" },
      "workspacesPane": { "flex": "0 0 25%" },
      "playerHeader": {
        "backgroundColor": "rgb(250,250,250)",
        "boxShadow": "rgba(0, 0, 0, 0.2) 0px 1px 1px",
        "zIndex": 9
      },
      "playerHeaderText": { "color": "#AAA", "fontWeight": "normal" },
      "workspacesHeader": {
        "backgroundColor": "rgb(250,250,250)",
        "boxShadow": "rgba(0, 0, 0, 0.2) 0px 1px 1px",
        "zIndex": 9
      },
      "workspacesHeaderText": { "color": "#AAA", "fontWeight": "normal" },
      "workspacesButtonWrapper": { "backgroundColor": "rgb(59, 108, 212)" },
      "workspacesRowActive": {
        "backgroundColor": "rgb(59, 108, 212)",
        "borderLeftColor": "rgb(59, 108, 212)"
      },
      "workspacesDescription": { "backgroundColor": "rgb(59, 108, 212)" }
    }
  },
  
    js_playground_config : {
      "preset": "react-native",
      
      "fullscreen": true,
      
      "panes": [
        "editor",
        {
          "id": "player",
          "type": "player",
          "platform": "ios",
          "width": 360,
          "scale": 1,
          "prelude": "var bundle = window['react-navigation-bundle'];\n__VendorComponents.register('@react-navigation/native', { NavigationContainer: bundle.NavigationContainer });\n__VendorComponents.register('@react-navigation/stack', { createStackNavigator: bundle.createStackNavigator });",
          "modules": [
            {
              "name": "react-navigation-bundle",
              "url": "https://the-coder.s3.ap-south-1.amazonaws.com/js/react-navigation-bundle.js",
              "globalName": "react-navigation-bundle"
            },
            {
              "name": "tinylib",
              "url": "https://the-coder.s3.ap-south-1.amazonaws.com/tinylib.js",
              "globalName": "tinylib"
            }
          ]
        }
      ],
      
      "responsivePaneSets": [
        {
          "maxWidth": 920,
          "panes": [
            {
              "id": "stack",
              "type": "stack",
              "children": [
                { "id": "editor-0", "title": "Code", "type": "editor" },
                {
                  "id": "player",
                  "title": "Live Preview",
                  "type": "player",
                  "platform": "ios",
                  "width": 360,
                  "scale": 1,
                  "prelude": "var bundle = window['react-navigation-bundle'];\n__VendorComponents.register('@react-navigation/native', { NavigationContainer: bundle.NavigationContainer });\n__VendorComponents.register('@react-navigation/stack', { createStackNavigator: bundle.createStackNavigator });",
                  "modules": [
                    {
                      "name": "react-navigation-bundle",
                      "url": "https://the-coder.s3.ap-south-1.amazonaws.com/js/react-navigation-bundle.js",
                      "globalName": "react-navigation-bundle"
                    },
                    {
                      "name": "tinylib",
                      "url": "https://the-coder.s3.ap-south-1.amazonaws.com/tinylib.js",
                      "globalName": "tinylib"
                    }
                  ],
                  "style": { "paddingLeft": "0px", "paddingRight": "0px" }
                }
              ]
            }
          ]
        }
      ],
    
      "code": "",
      
      "files": {
  
          "Feed.js": "import React from 'react'\nimport {  ScrollView, StyleSheet } from 'react-native'\n\nimport { item } from './DATA'\nimport HomeFeed from './HomeFeed'\n\nconst Feed = () => (\n<ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>\n<HomeFeed item={item.home_feed}/>\n</ScrollView>\n)\n\nexport default Feed;\n\nconst styles = StyleSheet.create({\n\n});",
          
          "HomeFeed.js": "import React from 'react'\nimport { Text, View, FlatList, StyleSheet } from 'react-native'\n\nimport HomeCarousel from './HomeCarousel'\n\nconst homeFeedItem = ({ item }) => (\n<View style={styles.home_feed_item}>\n<Text style={styles.artist_name}>{item.artist_name}</Text>\n<HomeCarousel item={item.home_carousel}/>\n<Text style={styles.art_caption}>{item.art_caption}</Text>\n<Text style={styles.art_description}>{item.art_description}</Text>\n</View>\n  );\n\nconst HomeFeed = ({ item }) => (\n<FlatList\n    style={styles.home_feed}\n    data={item}\n    renderItem={homeFeedItem}\n    keyExtractor={item => item.id}\n    showsVerticalScrollIndicator={false}\n    />\n);\n\nexport default HomeFeed;\n\nconst styles = StyleSheet.create({\nartist_name: {\n    color: 'hsl(274,100%,60%)',\n    fontSize: 15,\n    fontWeight: '400',\n    paddingHorizontal: 10,\n    paddingTop: 5\n  },\nart_caption: {\n    color: 'hsl(274,100%,60%)',\n    fontSize: 15,\n    fontWeight: '400',\n    paddingHorizontal: 10,\n    paddingTop: 5\n  },\nart_description: {\n    fontSize: 12,\n    fontWeight: '250',\n    paddingHorizontal: 10,\n    paddingTop:5\n  }\n});",
  
  
          "HomeCarousel.js": "import React from 'react'\nimport { Image, View, FlatList, StyleSheet } from 'react-native'\n\n\n\nconst homeCarouselItem = ({ item }) => (\n<View style={styles.home_carousel_item}>\n<Image\n    style={styles.art_photo}\n    source={{uri: item.art_photo}}\n    />\n</View>\n  );\n\nconst HomeCarousel = ({ item }) => (\n<FlatList\n    horizontal={true}\n    style={styles.home_carousel}\n    data={item}\n    renderItem={homeCarouselItem}\n    keyExtractor={item => item.id}\n    showsHorizontalScrollIndicator={false}\n    pagingEnabled={true}\n    />\n);\n\nexport default HomeCarousel;\n\nconst styles = StyleSheet.create({\nart_photo: {\n    width: '100vw',\n    height: '100vw',\n    marginTop: 5\n  }\n});",
  
          "Profile.js": "import React from 'react'\nimport { Image, Text, ScrollView, StyleSheet } from 'react-native'\n\nimport { item } from './DATA'\n\n\nconst Profile = () => (\n<ScrollView style={styles.profile} showsVerticalScrollIndicator={false}>\n<Image\n    style={styles.artist_pic}\n    source={{uri: item.artist_pic}}\n    />\n<Text style={styles.artist_bio}>{item.artist_bio}</Text>\n<Text style={styles.artist_age}>{item.artist_age}</Text>\n</ScrollView>\n)\n\nexport default Profile;\n\nconst styles = StyleSheet.create({\nartist_pic: {\n    width: '100vw',\n    height: '100vw',\n    marginTop: 5\n  },\nartist_bio: {\n    fontSize: 12,\n    fontWeight: '250',\n    paddingHorizontal: 10,\n    paddingTop:5\n  },\nartist_age: {\n    color: 'hsl(274,100%,60%)',\n    fontSize: 15,\n    fontWeight: '400',\n    paddingHorizontal: 10,\n    paddingTop: 5\n  }\n});",
  
          "DATA.js": "export const item = {\n    \"id\": \"bb88ce0d-da8e-4d73-aecd-28a8d74482ce\",\n    \"home_feed\": [\n        {\n            \"id\": \"47832f6a-d65b-4e23-a229-ab0ad27ce607\",\n            \"artist_name\": \"lay\",\n            \"home_carousel\": [\n                {\n                    \"id\": \"56887510-d127-4e81-8ad8-5a77975dd7ff\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/343.png\"\n                },\n                {\n                    \"id\": \"7c46d92d-0a00-4fe3-aac5-2ca7b5139a11\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/56.png\"\n                },\n                {\n                    \"id\": \"018f5408-caa4-4855-97dc-03de3118c630\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/55.png\"\n                },\n                {\n                    \"id\": \"e294cc0f-6b05-4ef7-ac00-4a2ca409109e\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/221.png\"\n                },\n                {\n                    \"id\": \"0f187138-fd52-48f4-b577-8aedce8abfd7\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/247.png\"\n                }\n            ],\n            \"art_caption\": \"every\",\n            \"art_description\": \"Hold fill head make. Wall course building include.\"\n        },\n        {\n            \"id\": \"d8ce172a-7cd6-4a3a-a17a-85842a658df1\",\n            \"artist_name\": \"mean\",\n            \"home_carousel\": [\n                {\n                    \"id\": \"a0ba7b0a-7192-42bc-802c-e8bd113a1729\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/3.png\"\n                },\n                {\n                    \"id\": \"43593162-f441-4783-bebb-8c56310ab06a\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/70.png\"\n                },\n                {\n                    \"id\": \"4f685e5f-9cf4-4ec2-8e85-4aece79b4096\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/365.png\"\n                },\n                {\n                    \"id\": \"4545a2bc-8b7c-42d9-87d6-16a7f26bd042\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/225.png\"\n                },\n                {\n                    \"id\": \"4ebb3eb6-81b5-4e33-a57f-0a940f08ff8d\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/170.png\"\n                }\n            ],\n            \"art_caption\": \"society\",\n            \"art_description\": \"Rise like serious. Generation American scientist remember choose share. Put side office bad help.\"\n        },\n        {\n            \"id\": \"eb44322e-6a5d-49a7-bce6-e20c40b5e4ec\",\n            \"artist_name\": \"time\",\n            \"home_carousel\": [\n                {\n                    \"id\": \"10987df7-fe37-4779-82e5-325e400c291e\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/101.png\"\n                },\n                {\n                    \"id\": \"da72bec6-0097-489b-a78c-609f94131b03\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/347.png\"\n                },\n                {\n                    \"id\": \"68147c81-8645-4be2-8a09-4eaec5027897\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/38.png\"\n                },\n                {\n                    \"id\": \"6b253746-2d9f-45de-b2f7-f615d006a7a6\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/32.png\"\n                },\n                {\n                    \"id\": \"fad6b861-4b42-4d1c-9d2e-fca6e30389f7\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/178.png\"\n                }\n            ],\n            \"art_caption\": \"though\",\n            \"art_description\": \"Country six away themselves early. Especially agency them whose. Family experience college doctor others focus baby citizen. All street meet.\"\n        },\n        {\n            \"id\": \"0d2560b9-bf19-469f-b3e9-b3500d9d6b9b\",\n            \"artist_name\": \"task\",\n            \"home_carousel\": [\n                {\n                    \"id\": \"0db0f3b9-2f1e-4727-a8db-b7e7c4e8a46d\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/187.png\"\n                },\n                {\n                    \"id\": \"875b58bc-ec14-4a8e-a8c3-07f90bcc71dc\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/191.png\"\n                },\n                {\n                    \"id\": \"4fd42f37-1dd3-4095-a8b0-ac37c072e318\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/36.png\"\n                },\n                {\n                    \"id\": \"95801a23-bda1-427f-b748-c7650be2ebf4\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/296.png\"\n                },\n                {\n                    \"id\": \"9fe49f0e-e554-43d7-be5f-6300ef7e89f5\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/261.png\"\n                }\n            ],\n            \"art_caption\": \"war\",\n            \"art_description\": \"Mr single girl choice better trial. Ahead thought tree speak local. Every partner room nature magazine race.\"\n        },\n        {\n            \"id\": \"a3471474-66b4-48b2-a79b-92501afb179d\",\n            \"artist_name\": \"finally\",\n            \"home_carousel\": [\n                {\n                    \"id\": \"10953d8f-43cc-48e8-863a-77be6bb245e9\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/235.png\"\n                },\n                {\n                    \"id\": \"627aab26-6beb-45df-b58b-faf361fdd86a\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/48.png\"\n                },\n                {\n                    \"id\": \"d3badc1f-f7b1-4b95-befb-89f251d9fc27\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/31.png\"\n                },\n                {\n                    \"id\": \"fa97bed1-df08-4c18-8b71-370f2261514f\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/122.png\"\n                },\n                {\n                    \"id\": \"b48de8ed-56b7-4fee-8b57-9abed7330de2\",\n                    \"art_photo\": \"https://the-coder.s3.ap-south-1.amazonaws.com/images_540/232.png\"\n                }\n            ],\n            \"art_caption\": \"pretty\",\n            \"art_description\": \"Account hold night relate on morning second. These happy set describe.\"\n        }\n    ]\n}"
      },
    
      "styles": {
        "tab": { "backgroundColor": "rgb(250,250,250)" },
        "header": {
          "backgroundColor": "rgb(250,250,250)",
          "boxShadow": "rgba(0, 0, 0, 0.2) 0px 1px 1px",
          "zIndex": 9
        },
        "headerText": { "color": "#AAA", "fontWeight": "normal" },
        "transpilerHeader": {
          "backgroundColor": "rgb(240,240,240)",
          "boxShadow": "rgba(0, 0, 0, 0.2) 0px 1px 1px",
          "zIndex": 9
        },
        "transpilerHeaderText": { "color": "#888", "fontWeight": "normal" },
        "tabText": { "color": "#AAA" },
        "tabTextActive": {
          "color": "#333",
          "borderBottomColor": "rgb(59, 108, 212)"
        },
        "playerPane": {
          "overflow": "hidden",
          "background": "rgb(250, 250, 250)",
          "marginLeft": "0",
          "marginRight": "0",
          "paddingLeft": "10px",
          "paddingRight": "10px"
        },
        "consolePane": { "backgroundColor": "white" },
        "workspacesPane": { "flex": "0 0 25%" },
        "playerHeader": {
          "backgroundColor": "rgb(250,250,250)",
          "boxShadow": "rgba(0, 0, 0, 0.2) 0px 1px 1px",
          "zIndex": 9
        },
        "playerHeaderText": { "color": "#AAA", "fontWeight": "normal" },
        "workspacesHeader": {
          "backgroundColor": "rgb(250,250,250)",
          "boxShadow": "rgba(0, 0, 0, 0.2) 0px 1px 1px",
          "zIndex": 9
        },
        "workspacesHeaderText": { "color": "#AAA", "fontWeight": "normal" },
        "workspacesButtonWrapper": { "backgroundColor": "rgb(59, 108, 212)" },
        "workspacesRowActive": {
          "backgroundColor": "rgb(59, 108, 212)",
          "borderLeftColor": "rgb(59, 108, 212)"
        },
        "workspacesDescription": { "backgroundColor": "rgb(59, 108, 212)" }
      }
    
  },
  URL_FRONT_PART: "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=",
//   encoded_js_playground_configuration1: window.encodeURIComponent(JSON.stringify(js_only_player_config)).replace(/'/g,"%27").replace(/"/g,"%22"),
//   encoded_js_playground_configuration2: window.encodeURIComponent(JSON.stringify(js_playground_config)).replace(/'/g,"%27").replace(/"/g,"%22"),
//   endurl_without_editor: URL_FRONT_PART + encoded_js_playground_configuration1,
//   endurl_with_editor: URL_FRONT_PART + encoded_js_playground_configuration2
  
//   console.log("endurl (without editor):", endurl_without_editor);
//   console.log("endurl (with editor):", endurl_with_editor);
}
