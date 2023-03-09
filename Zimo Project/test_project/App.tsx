import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const App = () => {

  return (
    <View>

      {/* Header  */}
      <View style={styles.row}>
        <Image source={require('test_project/assets/left-arrow.png')} style={[styles.box, { alignSelf: 'flex-start', width: 30, height: 30, }]} />
        <Image source={require('test_project/assets/zimo.png')} style={[styles.box, { paddingLeft: 270, paddingTop: 20, resizeMode: 'contain', width: 20, height: 20, }]} />
        <Image source={require('test_project/assets/cart.png')} style={[styles.box, { paddingLeft: 30, paddingTop: 20, resizeMode: 'contain', width: 20, height: 25, }]} />
      </View>
      <View style={{ height: 0.3, width: 500, backgroundColor: 'grey', alignSelf: 'center', opacity: 20 }}></View>

      {/* Title  */}
      <View style={styles.row}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text>786 contacts</Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 40, paddingRight: 50, paddingTop: 0 }}>CONTACTS</Text>
          <Image source={require('test_project/assets/user-icon.png')} style={[styles.box, { paddingLeft: 30, paddingTop: 20, resizeMode: 'contain', width: 20, height: 25, }]} />
        </View>
      </View>

      {/* Profile picture and Add icon */}
      <View style={styles.row}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Image source={require('test_project/assets/dp.png')} style={[styles.box, { paddingLeft: 30, paddingTop: 20, resizeMode: 'cover', width: 60, height: 60, borderRadius: 50, }]} />
          <Text style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 20, paddingRight: 50, paddingTop: 0 }}>Sooraj Kumar</Text>
          <Image source={require('test_project/assets/add.png')} style={[styles.box, { paddingLeft: 65, paddingTop: 20, resizeMode: 'contain', width: 15, height: 15, }]} />
        </View>
      </View>
      <View style={{ height: 0.5, width: 330, backgroundColor: 'grey', alignSelf: 'center', opacity: 20, marginTop: 20, }}></View>

      {/*/Main Body*/}
      <View style={styles.column}>
        <View style={{ height: 500, width: 40, }}>
          <Text style={{ marginBottom: 200, }}>A</Text>
          <Text>B</Text>
        </View>

        <View style={{ height: 500, width: 280, }}>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 20, paddingRight: 10, }}>
            <Text style={{ fontSize: 12, color: 'black', paddingRight: 30 }}>Ankit Tiwari</Text>
            <Text style={{ fontSize: 12, color: 'grey' }}>+44 7867 123456</Text>
            <Text style={{ fontSize: 13, color: 'grey', paddingLeft: 35, }}>INVITE</Text>
            <View style={{ height: 1, width: 200, backgroundColor: 'grey', alignSelf: 'center', opacity: 20, marginTop: 20, }}></View>
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 10, paddingRight: 10, }}>
            <Text style={{ fontSize: 12, color: 'black', paddingRight: 30 }}>Ankit Tiwari</Text>
            <Text style={{ fontSize: 12, color: 'grey' }}>+44 7867 123456</Text>
            <Text style={{ fontSize: 13, color: 'grey', paddingLeft: 35, }}>INVITE</Text>
            <View style={{ height: 1, width: 200, backgroundColor: 'grey', alignSelf: 'center', opacity: 20, marginTop: 20, }}></View>
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 10, paddingRight: 10, }}>
            <Text style={{ fontSize: 12, color: 'black', paddingRight: 30 }}>Ankit Tiwari</Text>
            <Text style={{ fontSize: 12, color: 'grey' }}>+44 7867 123456</Text>
            <Text style={{ fontSize: 13, color: 'grey', paddingLeft: 35, }}>INVITE</Text>
            <View style={{ height: 1, width: 200, backgroundColor: 'grey', alignSelf: 'center', opacity: 20, marginTop: 20, }}></View>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 10, paddingRight: 10, }}>
            <Text style={{ fontSize: 12, color: 'black', paddingRight: 30 }}>Ankit Tiwari</Text>
            <Text style={{ fontSize: 12, color: 'grey' }}>+44 7867 123456</Text>
            <Text style={{ fontSize: 13, color: 'grey', paddingLeft: 35, }}>INVITE</Text>
            <View style={{ height: 1, width: 200, backgroundColor: 'grey', alignSelf: 'center', opacity: 20, marginTop: 20, }}></View>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 20, paddingRight: 10, }}>
            <Text style={{ fontSize: 12, color: 'black', paddingRight: 30 }}>Basit Ahmed</Text>
            <Text style={{ fontSize: 12, color: 'grey' }}>+44 7867 123456</Text>
            <Text style={{ fontSize: 13, color: 'grey', paddingLeft: 35, }}>INVITE</Text>
            <View style={{ height: 1, width: 200, backgroundColor: 'grey', alignSelf: 'center', opacity: 20, marginTop: 20, }}></View>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 10, paddingRight: 10, }}>
            <Text style={{ fontSize: 12, color: 'black', paddingRight: 30 }}>Basit Ahmed</Text>
            <Text style={{ fontSize: 12, color: 'grey' }}>+44 7867 123456</Text>
            <Text style={{ fontSize: 13, color: 'grey', paddingLeft: 35, }}>INVITE</Text>
            <View style={{ height: 1, width: 200, backgroundColor: 'grey', alignSelf: 'center', opacity: 20, marginTop: 20, }}></View>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 10, paddingRight: 10, }}>
            <Text style={{ fontSize: 12, color: 'black', paddingRight: 30 }}>Basit Ahmed</Text>
            <Text style={{ fontSize: 12, color: 'grey' }}>+44 7867 123456</Text>
            <Text style={{ fontSize: 13, color: 'grey', paddingLeft: 35, }}>INVITE</Text>
            <View style={{ height: 1, width: 200, backgroundColor: 'grey', alignSelf: 'center', opacity: 20, marginTop: 20, }}></View>
          </View>
        </View>


        <View style={{ height: 500, width: 50, }}>

          {/* const elements = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
          elements.map((element) => {
              <Text>{element}</Text>
          }) */}

          <Text style={{ fontSize: 10 }}>A</Text>
          <Text style={{ fontSize: 10 }}>B</Text>
          <Text style={{ fontSize: 10 }}>C</Text>
          <Text style={{ fontSize: 10 }}>D</Text>
          <Text style={{ fontSize: 10 }}>E</Text>
          <Text style={{ fontSize: 10 }}>F</Text>
          <Text style={{ fontSize: 10 }}>G</Text>
          <Text style={{ fontSize: 10 }}>H</Text>
          <Text style={{ fontSize: 10 }}>I</Text>
          <Text style={{ fontSize: 10 }}>J</Text>
          <Text style={{ fontSize: 10 }}>K</Text>
          <Text style={{ fontSize: 10 }}>L</Text>
          <Text style={{ fontSize: 10 }}>M</Text>
          <Text style={{ fontSize: 10 }}>N</Text>
          <Text style={{ fontSize: 10 }}>O</Text>
          <Text style={{ fontSize: 10 }}>P</Text>
          <Text style={{ fontSize: 10 }}>Q</Text>
          <Text style={{ fontSize: 10 }}>R</Text>
          <Text style={{ fontSize: 10 }}>S</Text>
          <Text style={{ fontSize: 10 }}>T</Text>
          <Text style={{ fontSize: 10 }}>U</Text>
          <Text style={{ fontSize: 10 }}>V</Text>
          <Text style={{ fontSize: 10 }}>W</Text>
          <Text style={{ fontSize: 10 }}>X</Text>
          <Text style={{ fontSize: 10 }}>Y</Text>
          <Text style={{ fontSize: 10 }}>Z</Text>
          <Text style={{ fontSize: 10 }}>#</Text>
        </View>
      </View>


<View style={styles.row}>
<Image source={require('test_project/assets/search.png')} style={{width: 20, height: 20, marginLeft: 20, marginRight: 50,}}/>
<Image source={require('test_project/assets/adjust.png')} style={{width: 20, height: 20, marginLeft: 20, marginRight: 50,}}/>
<Image source={require('test_project/assets/heart.png')} style={{width: 30, height: 20, marginLeft: 20, marginRight: 50,}}/>
<Image source={require('test_project/assets/user-icon.png')} style={{width: 20, height: 20, marginLeft: 20, marginRight: 20,}}/>

</View>





    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },

  column: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    height: 390
  },


  // button: {
  //   paddingHorizontal: 8,
  //   paddingVertical: 6,
  //   borderRadius: 4,
  //   backgroundColor: 'oldlace',
  //   alignSelf: 'flex-start',
  //   marginHorizontal: '1%',
  //   marginBottom: 6,
  //   minWidth: '48%',
  //   textAlign: 'center',
  // },

});

export default App;