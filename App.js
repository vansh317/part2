import * as React from 'react';
import { Text, View, Button } from 'react-native';

class Mysound extends React.Component{
  render(){
    return(
    <View style={{width:150 , height:150 , marginLeft:100 ,  marginRight:100 ,marginBottom:100  }}>
    <Button  color="red" title="sound 1" onPress={() => alert(" play sound 1 ")} />
 <Button  color="" title="sound 2" onPress={() => alert(" play sound 2")} />
 <Button  color="blue" title="sound 3" onPress={() => alert(" play sound 3 ")}  />
 <Button  color="green" title="sound 4" onPress={() => alert(" play sound 4 ")}  />
 <Button  color="orange" title="sound 5" onPress={() => alert(" play sound 5 ")}  />
    </View>

    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
       <Mysound/>
      </View>
    );
  }
}