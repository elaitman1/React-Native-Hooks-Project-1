import { useEffect, useState } from 'react' 
import Yelp from '../Components/Api/Yelp'
import ResultsList from '../Components/ResultsList'

export default () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [results, setResults] = useState([])

    const searchApi = async (searchTerm) => {
        try {
            const response = await Yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            
            // console.log('response====>', response.data.businesses)
            
            setResults(response.data.businesses)
            // alert(JSON.stringify(response))
            

        } catch(err) {
            setErrorMessage('Something went wrong')
            }
    }


    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
}




























