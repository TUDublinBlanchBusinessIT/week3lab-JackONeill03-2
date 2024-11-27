import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';


export default function App(){
const [fname, setFname] = useState("Joe");
const [lname, setLname] = useState("Bloggs");
const [dob, setDob] = useState("22 August 1990");
function buttonClicked() {
  Alert.alert("button clicked");
}
<Button title="SUBMIT" onPress={buttonClicked}/>
  return(
    <View> 
      <Text>Hello {fname} {lname}. You were born on {dob}</Text>
<TextInput placeholder="Enter your firstname" onChangeText={(val) => setFname(val)}/>
<TextInput placeholder="Enter your lastname" onChangeText={(val) => setLname(val)}/>
<TextInput placeholder="Enter your date of birth" onChangeText={(val) => setDob(val)}/>

    </View>
  )
};



