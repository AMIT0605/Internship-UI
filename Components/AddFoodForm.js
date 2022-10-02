import React from "react";
import { View, StyleSheet,ScrollView, Image, Text,Button, TouchableOpacity,TextInput } from "react-native";



const AddFoodForm=()=>{
    const [text, onChangeText] = React.useState("Useless Text");
    return(
   
        <>
    

    <Text style={{fontSize:35,fontWeight:"bold",position:"absolute",top:50,left:105}}>FOOD LIST</Text>
         <View style={styles.view1}/>
         <View style={styles.view2}/>
         
         <Image
        resizeMode="contain"
        source={{
          uri: "https://i.ibb.co/FD5MJmx/delete.png",
        }}
        style={styles.image2}
        />
         <Image
        resizeMode="contain"
        source={{
          uri: "https://i.ibb.co/FD5MJmx/delete.png",
        }}
        style={styles.image3}
        />
          <Image
        resizeMode="contain"
        source={{
          uri: "https://i.ibb.co/dry7Qxs/write.png",
        }}
        style={styles.image4}
        />
           <Image
        resizeMode="contain"
        source={{
          uri: "https://i.ibb.co/dry7Qxs/write.png",
        }}
        style={styles.image5}
        />
         <Text style={{fontSize:19,fontWeight:"bold",position:"absolute",top:160,left:55}}>Banana</Text>
         <Text style={{fontSize:19,fontWeight:"bold",position:"absolute",top:260,left:55}}>Apple</Text>

         <Text style={{fontSize:13,fontWeight:"bold",position:"absolute",top:165,opacity:0.5,left:155}}>Price: Rs 100</Text>
         <Text style={{fontSize:13,fontWeight:"bold",position:"absolute",top:265,opacity:0.5,left:155}}>Price: Rs 20</Text>
         <View style={styles.view4}/>
         <View style={styles.view5}/>
         
           <View style={styles.parent1}>
                
                <TouchableOpacity activeOpacity={0.95} 
                 onPress={() => navigation.navigate('AddFoodForm')}
                 accessibilityLabel="Learn more about this purple button" style={styles.button1}>
                    <Text style={{fontWeight:"bold"}}>Add Food Item</Text>
                </TouchableOpacity>
            </View>
        
           <View style={styles.parent}>
                
           <TouchableOpacity activeOpacity={0.95} 
                 onPress={() => navigation.navigate('AddFoodForm')}
                 accessibilityLabel="Learn more about this purple button" style={styles.button}>
                    <Text style={{fontWeight:"bold"}}>Final Food List</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.form}/>
            <View style={styles.form1}/>
            <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Text}
        placeholder="Food Name"
        
      />
           <TextInput
        style={styles.input1}
        onChangeText={onChangeText}
        value={Text}
        placeholder="Food Price"
        
      />
       <View style={styles.parent}>
                
                <TouchableOpacity activeOpacity={0.95} 
                      onPress={() => navigation.navigate('AddFoodForm')}
                      accessibilityLabel="Learn more about this purple button" style={styles.button2}>
                         <Text style={{fontWeight:"bold"}}>Add Food Item</Text>
                     </TouchableOpacity>
                     </View>
                    <Text style={{fontWeight:"bold",position:"absolute",top:530,elevation:13,left:38,fontSize:25}}>Add Food</Text>
                    <Image
        resizeMode="contain"
        source={{
          uri: "https://i.ibb.co/rFY6q2H/cancel.png",
        }}
        style={styles.image8}
        />




        </>  
   
        );
    }

    const styles = StyleSheet.create({

        view1:
        {
          width:340,
          height:70,
          backgroundColor:"grey",
          opacity:0.5,
          borderBottomLeftRadius:10,
          borderBottomRightRadius:10,
          borderTopLeftRadius:10,
          borderTopRightRadius:10,
          position:"absolute",
          top:140,
          
          left:25,

        },
        view2:
        {
          width:340,
          height:70,
          backgroundColor:"grey",
          opacity:0.5,
          borderBottomLeftRadius:10,
          borderBottomRightRadius:10,
          borderTopLeftRadius:10,
          borderTopRightRadius:10,
          position:"absolute",
          top:240,
          left:25,

        },
        view3:
        {
          width:340,
          height:70,
          backgroundColor:"#a8ff78",
          opacity:0.7,
          borderWidth:1.5,
          borderColor:"black",
          borderBottomLeftRadius:10,
          borderBottomRightRadius:10,
          borderTopLeftRadius:10,
          borderTopRightRadius:10,
          position:"absolute",
          top:380,
          left:25,
          
        },
        image2:
        {
        width:30,
        height:30,
        
        position:"absolute",
        top:160,
        left:320,


        },
        image3:
        {
        width:30,
        height:30,
        
        position:"absolute",
        top:260,
        left:320,


        },
      
        image4:
        {
        width:30,
        height:30,
        
        position:"absolute",
        top:160,
        left:260,


        },
        image5:
        {
        width:30,
        height:30,
        
        position:"absolute",
        top:260,
        left:260,


        },
       
        view5:
        {
          width:2,
          height:70,
          backgroundColor:"grey",
          opacity:0.5,
          borderBottomLeftRadius:10,
          borderBottomRightRadius:10,
          borderTopLeftRadius:10,
          borderTopRightRadius:10,
          position:"absolute",
          top:140,
          left:240,

        },
        view4:
        {
          width:2,
          height:70,
          backgroundColor:"grey",
          opacity:0.5,
          borderBottomLeftRadius:10,
          borderBottomRightRadius:10,
          borderTopLeftRadius:10,
          borderTopRightRadius:10,
          position:"absolute",
          top:240,
          left:240,

        },

        image6:
        {
        width:32,
        height:32,
        
        position:"absolute",
        top:400,
        left:38,


        },
        view7:
        {
            position:"absolute",
            top:800,
        
            
            left:21,
            width:350,
        },
      
      
        button: {
            flexDirection: 'row', 
            height: 50, 
            backgroundColor: '#a8ff78',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
            elevation:10,
            top:750,
            left:21,
            position:"absolute",
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,          
            width:350,
        },
        button1: {
            flexDirection: 'row', 
            height: 60,
             
            backgroundColor: '#a8ff78',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
            elevation:10,
            top:350,
            left:21,
            position:"absolute",
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,          
            width:350,
            borderWidth:1.5,
            borderColor:"black",
        },
        button2: {
            flexDirection: 'row', 
            height: 50, 
            backgroundColor: '#a8ff78',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
            elevation:13,
            top:750,
            left:21,
            position:"absolute",
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,          
            width:350,
        },
        form:
        {
        width:500,
        height:1000,
        position:"absolute",
        elevation:12,
        backgroundColor:"black",
        opacity:0.5,
        },
        form1:
        {
        width:390,
        height:350,
        left:1,
        top:520,
        position:"absolute",
        elevation:12,
        backgroundColor:"white",
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        




        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width:320,
            position:"absolute",
            top:600,
            left:22,
            elevation:12,
          },
          input1: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width:320,
            position:"absolute",
            top:700,
            left:22,
            elevation:12,
          },
          image8:
          {
           width:20,
           height:20,
           position:"absolute",
           top:540,
           left:330,
           elevation:12,



          },
    });
export default AddFoodForm;