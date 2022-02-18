// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './src/Components/SearchBar'
import React, {useState} from 'react'
import useResults from './src/hooks/useResults'
import ResultsList from './src/Components/ResultsList'

export default function App() {
const [term, setTerm] = useState('')
const [searchApi, results, errorMessage] = useResults()

const filtersResultsByPrice = (dollarSign) =>{
  return results.filter((result) => {
    return result.price === dollarSign
  })
}
  return (
    <View>
    <SearchBar 
      term={term}
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)} 
    />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    {/* <Text>We have found {results.length} results</Text> */}
    <ResultsList reults={filtersResultsByPrice('$')} title='Cost Effective'/>
    <ResultsList reults={filtersResultsByPrice('$$')} title='Bit Pricier'/>
    <ResultsList reults={filtersResultsByPrice('$$$')} title='Big Spender'/>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    height: 40,
    borderWidth: 3,
    marginTop: 40
  },
});
