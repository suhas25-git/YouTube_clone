import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation,useTheme } from "@react-navigation/native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";

const MiniCard = (props) => {
  const {colors}= useTheme();
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Videoplayer", {
          videoId: props.videoId,
          title: props.title,
        })
      }
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 3,
          marginBottom: 0,
          padding: 4,
          elevation: 4,
          backgroundColor: colors.headercolor,
          borderRadius: 4,
        }}
      >
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/mqdefault.jpg`,
          }}
          style={{
            width: "47%",
            height: 100,
            backgroundColor: colors.headercolor,
            borderRadius: 4,
          }}
        />
        <View style={{ paddingLeft: 9 }}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={3}
            style={{
              width: Dimensions.get("screen").width / 2,
              fontSize: 17,
              fontWeight: "bold",
              color: colors.textcolor,
            }}
          >
            {props.title}
          </Text>
          <Text style={{ fontSize: 12, color: colors.textcolor }}>
            {props.channel}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 
});

export default MiniCard;
