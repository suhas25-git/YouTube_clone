import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import Constant from "expo-constants";
import { useTheme } from "@react-navigation/native";
import Card from "../Card";
import Header from "../Header";
import { WebView } from "react-native-webview";
import { useSelector } from "react-redux";


const Videoplayer = ({route}) => {
  const{colors}= useTheme();
    const carddata = useSelector((state) => {
      return state.cardData;
    });
    const{videoId,title}=route.params 
    
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ width: "100%", height: 233 }}>
        <WebView
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
          style={{ marginTop: 20 }}
        />
      </View>
      <Text
        style={{
          color:colors.textcolor,
          fontSize: 20,
          width: Dimensions.get("screen").width - 50,
          margin: 9,
        }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      <View style={{ borderBottomWidth: 1 }} />
      <FlatList
        data={carddata}
        renderItem={({ item }) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
              chanelpic={item.snippet.channelId}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};

export default Videoplayer;

// class MyWeb extends Component {
//   render() {
//     return (
//       <WebView
//         source={{ uri: "https://infinite.red" }}
//         style={{ marginTop: 20 }}
//       />
//     );
//   }
// }