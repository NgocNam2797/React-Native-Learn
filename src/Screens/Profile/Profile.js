import React from 'react';
import { View,Text } from 'react-native';

const Profile = ({navigation, route}) => {
    const {title}=route.params;
return(
    <View >
        <Text>{title}</Text>
    </View>
)}

export default Profile;
