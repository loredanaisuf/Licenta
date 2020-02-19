import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image 
} from 'react-native';

export default function Logo() {
    return (
        <View style={styles.container}>
            <Image style={{width:150,height:100}}
            source={require('../images/Logo.png')}/>

            <Text style={styles.logoText}>~SC ISUFMAR SRL cars~</Text>

        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent:'flex-end',
      alignItems:'center'
    },
    logoText: {
        marginVertical:15,
        fontSize:18,
        color:'rgba(255,255,255,0.7)'
    }
  });