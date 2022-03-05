import React, {useState}from 'react'
import { View , StyleSheet, TextInput,Text , Platform, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RegisterForm({navigation}) {

    const [Password, setPassword] = useState("");
    const [Rpassword, setRpassword] = useState("");
    const [Username ,setUsername] = useState("");
    const [Email, setEmail] = useState("")
    const register = () => {

    }
  return (
    <View>
        {/* username */}
        <View style={styles.text_container}>
            <Icon name="user" size={24} color="#7C82A0" style={styles.searchIcon} />
            <TextInput styles={{ height: 40, borderColor: 'gray', borderWidth: 1 , width: 70 }}
             onChangeText={text => setUsername(text)}
             placeholder="Username"
             value = {Username}
             />
        </View>

        {/* Email */}
        <View style={styles.text_container}>
            <Icon name="envelope" size={24} color="#7C82A0" style={styles.searchIcon} />
            <TextInput styles={{ height: 40, borderColor: 'gray', borderWidth: 1 , width: 70 }}
             onChangeText={text => setEmail(text)}
             placeholder="Email"
             value = {Email}
             />
        </View>
        {/* Password */}

        <View style={styles.text_container}>
            <Icon name="lock" size={24} color="#7C82A0" style={styles.searchIcon} />
            <TextInput styles={{ height: 40, borderColor: 'gray', borderWidth: 1 , width: 100 }}
             onChangeText={text => setPassword(text)}
             placeholder="Password"
             value = {Password}
             />
        </View>
        {/* Repeat Password */}
        <View style={styles.text_container}>
            <Icon name="lock" size={24} color="#7C82A0" style={styles.searchIcon} />
            <TextInput styles={{ height: 40, borderColor: 'gray', borderWidth: 1 , width: 100 }}
             onChangeText={text => setRpassword(text)}
             placeholder="Repeat Password"
             value = {Rpassword}
             />
        </View>


        <TouchableOpacity  style={styles.btn} onPress={() => navigation.navigate('RegisterScreen') }>
            <Text style={styles.btn.text}>
                Register
            </Text> 
        </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
    text_container:{
        flexDirection: "row",
        // justifyContent:'space-between',
        alignItems: 'center',
        height: 52,
        // marginRight: 20,
        marginTop: Platform.OS === "android" ? 42 : 27,
        backgroundColor: "#C4C4",
        borderRadius: 12,
        paddingVertical: Platform.OS === "android" ? 5 :10,
        paddingHorizontal: 20,
        backgroundColor: '#F3F4F7',
    },
    input:{
        color: "#7C82A0",
        textAlign: 'left',
        
    },
    searchIcon:{
        // flex: 1,
        marginRight: 20
        
    },
    btn:{
        // width: '90%',
        backgroundColor: '#475AD7',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 12,
        marginTop: 50,
        text :{
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            color: 'white',
        }
    }
})