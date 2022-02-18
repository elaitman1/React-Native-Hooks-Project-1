import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer 3qx6aeYjMfgzZKGsC439HhB3Tq4RmLWPT6RsjS3BTPAfyyOnaEemK_guW0oOMSdbrydRFZUsrP2k6duanGI2U7WsvqUqQJ8Jrf2YuqSTc3yhwXNlX5wyVOASWaz4YXYx'
    }
})