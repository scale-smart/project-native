import React from 'react';
import { View,Button,TouchableOpacity,createStackNavigator,Image,Text ,Alert} from 'react-native'
import {Facebook} from 'expo'

export default class Fblogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error:'', loading: false,userInfo:null};
    }

    async logInfb() {
        try {
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync('303960943492299', {
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`);
            const userInfo =await response.json();
            this.setState({
                userInfo
                // name: response.userInfo.name,
                // id: response.userInfo.id,
                // picture: result.userInfo.picture.data.url 
              })
            Alert.alert(
                'Logged in!', 
                `Hi ${(await response.json()).name}!`,
            )
        }
    }catch(err){
        console.log(err)
    }
}
    
   getUserInfo = () => {
       console.log(this.state.userInfo.picture.data.url)

       return(
           <View style={{alignItems:'center'}}>
                <View style={{backgroundColor:'#f2f2f2',marginLeft:20,width:100,height:100,borderRadius:50}}>
                        <Image 
                        source={{uri:this.state.userInfo.picture.data.url}}
                        style={{width:100,height:100,borderRadius:50,borderColor:'red'}}
                        />
                </View>
                        <Text style={{fontSize:20}}>{this.state.userInfo.name}</Text>
           </View>
       )
   }
    renderButtonOrLoading() {
        if (this.state.loading) {
            return <Text> Loading </Text>
        }
        return <View style={{marginLeft:110}}>
                <TouchableOpacity onPress={this.logInfb.bind(this)}>
                  <Image style={{height:40,width:160}}source={require('./images/facebook.png')} />  
                </TouchableOpacity>
            </View>
    }
    render() {
        return (
            <View>
                <Text>{this.state.error}</Text>
                {this.renderButtonOrLoading()}

                {!this.state.userInfo ? (<TouchableOpacity onPress={this.logInfb.bind(this)}/>):
                ( this.props.rtop(this.state.userInfo))
                
                }
            </View>

        )

    }


}