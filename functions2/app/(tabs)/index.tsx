import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, Button, ScrollView,Image } from 'react-native';

const App = () => {

  const [number, setNumber] = useState(1);

  const changenumber = () => {
    if (number < 5) {
      setNumber(number + 1);
    } else {
      setNumber(1);
    }
  };

  return (
//
    <View>
 
  <Pressable onPress={() => changenumber()}>
       
        <Text
     
          style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraph
              : number === 2
              ? styles.paragraphred
              : number === 3
              ? styles.paragraphpink
              : number === 4
              ? styles.paragraph
              : styles.paragraphyellow}>
        This is my first interest. this is {number}
        </Text>
      </Pressable>

 <ScrollView>
 {number === 1 ?<View style={styles.container}>
      <Text style={styles.paragraph}>
        My first interest is soccer
      </Text>
      <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg' }}
          style={{ width: 400, height: 300 }}
        />
    </View>:null}
    {number === 2 ?<View style={styles.container2}>
      <Text style={styles.paragraph}>
        My second interest is playing videogames 
      </Text>
      <Image
          source={{ uri: 'https://media.cnn.com/api/v1/images/stellar/prod/i-stock-1287493837-1.jpg?c=16x9' }}
          style={{ width: 400, height: 300 }}
        />
    </View>:null}
    {number === 3 ?<View style={styles.container3}>
      <Text style={styles.paragraph}>
        My third interest is to travel
      </Text>
      <Image
          source={{ uri: 'https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg' }}
          style={{ width: 400, height: 300 }}
        />
    </View>:null}
    {number === 4 ?<View style={styles.container4}>
      <Text style={styles.paragraph}>
        My fourth interest is to ride bike 
      </Text>
      <Image
          source={{ uri: 'https://cdn.outsideonline.com/wp-content/uploads/2019/07/24/kids-ride-bikes_s.jpg' }}
          style={{ width: 400, height: 300 }}
        />
    </View>:null}
    {number === 5 ?<View style={styles.container5}>
      <Text style={styles.paragraph}>
        My fifth interest is about  modified cars.
      </Text>
      <Image
          source={{ uri: 'https://s7d9.scene7.com/is/image/wheelpros/tsw-bathurst-17x9-18x9.5-silver%20w%20mirror%20cut%20face-1993%20acura%20nsx%2010?$2200x1500$&aemtype=gdp' }}
          style={{ width: 400, height: 300 }}
        />
    </View>:null}
    </ScrollView>
    </View>
  );
};

// Output (like HTML) ends here

//need to export the Component.
export default App;

//Styling -- Like CSS starts here.
const styles = StyleSheet.create({
  container: {
    height:550,
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 8,
  },
  container2: {
    height:550,
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 8,
  },
  container3: {
    height:550,
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 8,
  },
  container4: {
    height:550,
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 8,
  },
  container5: {
    height:550,
    justifyContent: 'center',
    backgroundColor: 'brown',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black'
  },
  paragraphred: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  paragraphgreen: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },

  paragraphpink: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'pink',
  },
  paragraphyellow: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
  },

  paragraph2: {
    margin: 14,
    fontSize:58,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },

});