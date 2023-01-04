import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { color } from 'react-native-reanimated';
import TimeConverter from './components/TimeConverter.js';
import DatePicker from 'react-native-date-picker'
export default function App() {

  var conv = new TimeConverter();
  var [shimo, setshimo] = useState(0);
  var [knoka, setknoka] = useState(0);
  var [yangdan, setyangdan] = useState(0);
  var [quagorio, setquagorio] = useState(0);
  var [djudja, setdjudja] = useState(0);
  var [lumpi, setlumpi] = useState(0);
  var [kulilumpi, setkulilumpi] = useState(0);
  var [date, setDate] = useState(new Date())
  var [open, setOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {


      var time = Date.now();
      const fuck = new Date().getTimezoneOffset() * 60000;
      const data = conv.convertTimeToDjuda(time - fuck);

      setshimo(data[0]);
      setknoka(data[1]);
      setyangdan(data[2]);
      setquagorio(data[3]);
      setdjudja(data[4]);
      setlumpi(data[5]);
      setkulilumpi(data[6]);

    }, 864);

    return () => clearInterval(interval);
  }, []);


  return (



<View style={styles.container}>
  <View style={styles.comp}>

     
  <AnimatedCircularProgress style={styles.circlestyle}
  rotation={0}
  size={320}
  width={25}
  fill={kulilumpi}
  lineCap="round"
  tintColor="#e84118"

  backgroundColor="#381d16"
  >
  </AnimatedCircularProgress>



  <AnimatedCircularProgress style={styles.circlestyle}
  rotation={0}
  size={260}
  width={25}
  lineCap="round"
  fill={lumpi}
  tintColor="#badc58"
  backgroundColor="#303622">
  </AnimatedCircularProgress>


  <AnimatedCircularProgress style={styles.circlestyle}
  rotation={0}
  size={200}
  width={25}
  lineCap="round"
  fill={djudja*10}
  tintColor="#18dcff"
  backgroundColor="#17353d" />

  <Text style={styles.textstyle} color="#fff">{Math.round(djudja) + ":" + Math.round(lumpi) }</Text>
  </View>
  <View style={styles.comp2}>
  <>
  <Button title="Open" onPress={() => setOpen(true)} />
  <DatePicker
  mode="datetime"
  modal
  open={open}
  date={date}
  onConfirm={(date) => {
    setOpen(false)
    setDate(date)
  }}
  onCancel={() => {
    setOpen(false)
  }}
/>
</>
  <Text style={styles.headl}>shimo: {shimo}</Text>
  <Text style={styles.headl}>knoka: {knoka}</Text>
  <Text style={styles.headl}>yangdan: {yangdan}</Text>
  <Text style={styles.headl}>quagorio: {quagorio}</Text>
  </View>
  <StatusBar style="auto" />
  </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1
    

  },
  comp: {

    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',

    
  },
  comp2: {

    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    
  },

  circlestyle:{

    position: 'absolute'
    
  },
  headl:{

    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: "Roboto"

  },
  textstyle:{
    position: 'absolute',
    color: 'white',
    fontSize: 15,
    fontWeight: '100',
    fontFamily: "Roboto"

  }
});
