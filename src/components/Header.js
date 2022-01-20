import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Alert  } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { NavigationContainer,useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import{useDispatch,useSelector} from "react-redux"

export default function Header() {
  const { colors } = useTheme();
  const dispatch=useDispatch();
  const iconcolor = colors.textcolor;
  const currentTheme=useSelector(state=>{
    return state.MyDarkMode;
  })
  
   const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: Constant.statusBarHeight,
        flexDirection: "row",
        elevation: 4,
        height: 45,
        backgroundColor: colors.headercolor,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", marginLeft: 8, marginTop: 3 }}>
        <Entypo name="youtube" size={36} color="red" />
        <Text
          style={{
            fontSize: 20,
            marginLeft: 5,
            marginTop: 4,
            fontWeight: "bold",
            color: iconcolor,
          }}
        >
          YouTube
        </Text>
      </View>
      <View style={styles.rightside}>
        <Ionicons name="md-videocam" size={30} color={iconcolor} />
        <Ionicons
          name="md-search"
          size={31}
          color={iconcolor}
          onPress={() => navigation.navigate("Search")}
        />
        <MaterialIcons
          name="account-circle"
          size={31}
          color={iconcolor}
          onPress={()=>dispatch({ type: "change_theme", payload:!currentTheme })}
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  
  rightside: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 130,
    marginLeft: 55,
    marginTop: 5,
  },
});
