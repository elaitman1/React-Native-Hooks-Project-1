import React from 'react'
import {TextInput, View, StyleSheet} from 'react-native'

// const SearchBar = ({onTermChange, term, onTermSubmit}) => {
//     return <View>
//         <TextInput 
//             style={styles.container}
//             placeholder='Search'
//             onChangeText={onTermChange}
//             value={term}
//             onEndEditing={onTermSubmit}
//         />
//     </View>

// }

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  
  return <View>
    <TextInput
      style={styles.container}
      placeholder='Search'
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
    />
  </View>
}

const styles = StyleSheet.create({
    container: {
      borderColor: 'black',
      height: 40,
      borderWidth: 3,
      marginTop: 40
    },
  });

export default SearchBar