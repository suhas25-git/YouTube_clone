import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constant from "expo-constants";
import { useNavigation,useTheme } from "@react-navigation/native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import MiniCard from "./MiniCard";
import {useSelector,useDispatch} from "react-redux"

const SearchScreen = () => {
  const{colors}=useTheme();
   const navigation = useNavigation();
  const [value, Setvalue] = useState("");
  // const [miniCardData, setminiCardData] = useState([]);
  const dispatch=useDispatch();
  const miniCardData= useSelector(state=>{
    return state.cardData
  })
  const [Loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyCcmKfNYrj4J6_rxhtAcTolKT2DZELp8Qw `
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        // setminiCardData(data.items);
        dispatch({type:"add",payload:data.items});
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginTop: Constant.statusBarHeight,
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 5,
          backgroundColor: colors.headercolor,
        }}
      >
        <Ionicons
          name="md-arrow-back"
          size={32}
          onPress={() => navigation.goBack()}
        />

        <TextInput
          style={{ width: "75%", backgroundColor: "#e6e6e9",borderRadius:5 }}
          value={value}
          onChangeText={(text) => {
            Setvalue(text);
          }}
        />
        <Ionicons name="md-send" size={35} onPress={() => fetchData()} />
      </View>

      {Loading ? (
        <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" />
      ) : null}

      <FlatList
        data={miniCardData}
        renderItem={({ item }) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => {
          item.id.videoId;
        }}
      />
    </View>
  );
};

export default SearchScreen;
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=song%20&type=video&key=AIzaSyCcmKfNYrj4J6_rxhtAcTolKT2DZELp8Qw
