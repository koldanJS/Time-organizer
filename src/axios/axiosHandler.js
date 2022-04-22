import axios from 'axios'

export default axios.create({
    baseURL: 'https://time-organizer-249d2-default-rtdb.europe-west1.firebasedatabase.app'
})