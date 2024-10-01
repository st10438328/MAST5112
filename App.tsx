import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput,FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const DATA = [
  { course: 'Starter' },
  { course: 'Main Course' },
  { course: 'Desert' },
];

type ItemsProps = { course: string };

const Item = ({ course }: ItemsProps) => (
  <View>
    <Text>{course}</Text>
  </View>
);
  


export default function App() {

  //Variables
  const[Starter, setStarter]= useState('');
  const[MainCourse, setMainCourse]= useState('');
  const[Desert, setDesert]= useState('');
  const[StarterItem, setStarterItem]=useState<string>('');
  const[QualArray, setQualArray]=useState<string[]>([]);
  const[SelectedItem, setSelectedItem]=useState<string | null>(null);
  const AddStudent=()=>{

  }
  const Save =() =>{
    setQualArray([...QualArray, StarterItem]);
    StarterItem;
  }

  return (
    <View style={styles.container}>
        
        <TextInput style={styles.formInput} placeholder='input starter'onChangeText={newText=>setStarter(newText)}/>
        <Text></Text>
        <TextInput style={styles.formInput} placeholder='input main'onChangeText={newText=>setMainCourse(newText)}/>
        <Text></Text>
        <TextInput style={styles.formInput} placeholder='input desert'onChangeText={newText=>setDesert(newText)}/>

 
<Button title='Add Dish' onPress={Save}/>
    
    <View style={styles.Listcontainer}>
      
      <SafeAreaView>
      
      </SafeAreaView>

      <View style={styles.buttonClick}>
  <Button title='Show Menu chosen' onPress={()=>{
    alert(Starter + '  ' + MainCourse + ' ' + Desert)
  }}/>
  <Text style={styles.moduleList}>Types of Courses</Text>
  <FlatList data={DATA}
  renderItem={({item}) => <Item course={item.course}/>}
  />

  
</View>

      <Text>Total {DATA.length}</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AppHome :{
   marginTop:35,
   margin:5,


  },

  container: {
    flex: 1,
    backgroundColor: '#BEBEBE',
    padding:10,
    marginTop:10,
    position:'relative',
    margin:5,
  },
  Listcontainer :{
    position:'relative',
    margin:15
  },
moduleList :{
  fontSize:24,
  fontWeight:'bold',
  margin:4,
},
  welcomepage: {
    color:'#ff3300',
    fontSize:20,
  },

formInput:{
 backgroundColor:'#BEBEBE',
 borderColor:'black',
 borderRadius:6,
 textAlign:'center',
 fontSize:23,
 paddingTop: 50,

  },
Textuser: {
fontSize:28,
fontWeight:'bold',
margin:5,
marginTop:5,
color:'black'

},
buttonClick: {
marginTop:12,
borderRadius:6,
}

});

