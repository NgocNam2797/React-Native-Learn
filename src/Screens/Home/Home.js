import React from 'react';
import { Text, View , TouchableOpacity, StyleSheet} from 'react-native';
import HeaderApp from '../../Components/HeaderApp/Index'
const Home = ({navigation}) => {
    const goToProfile=()=>{
        navigation.navigate('Profile',{title:'Xin chao'});
    }
    return(
    <View style={{flex:1}}>
        <HeaderApp/>
        <TouchableOpacity onPress={()=>goToProfile()}>
            <Text>Click Profile</Text>
        </TouchableOpacity>
    </View>
)}

export default Home;
