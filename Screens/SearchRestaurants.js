import React,{Component} from 'react'
import {View, TouchablOpacity,Text} from 'react-native'
import MyHeader from '../Components/MyHeader'
export default class SearchScreen extends Component {
    render(){
        return(
            <View>
                <MyHeader />
                <TextInput 
                style = {{
                width:"75%",
                height:35,
                alignSelf:'center',
                borderColor:'#ffab91',
                borderRadius:10,
                borderWidth:1,
                marginTop:20,
                padding:10,
            }}
                containerStyle = {{marginBottton: RFValue(25)}}
                placeholder = {'Search Restaurants Here...'}
                />
                
                <TouchableOpacity style = {{width:"75%",height:50,justifyContent:'center',alignItems:'center',borderRadius:10,backgroundColor:"#ff5722",shadowColor: "#000",}}>
                    <Text>
                        Select
                    </Text>
                </TouchableOpacity>
            </View>
        )
        //Will place API at line 23. Please check the api link that I send you in the email.
        //For now, this is all that I can do. 
        //After I figure out how to put the API, then I can continue with the creation of this screen.
        // Here is an exaple of how I could do it. 
        //fetch('https://example.com/data').then((response) => response.json()).then((json) => {
        //return data.names;
        //}).catch((error) => {
        //   console.error(error);
        // Or, maybe like this...
        /*
        fetch('https://example.com/data', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        newName: 'Some Name',
        id: 123
  })
});
        */

    //}
        };

}