import axios from "axios";

// ApiKey : b96588c9997943029aa551890476ffa6

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "b96588c9997943029aa551890476ffa6"
    }
})