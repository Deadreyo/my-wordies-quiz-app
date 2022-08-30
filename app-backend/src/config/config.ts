import dotenv from 'dotenv'
dotenv.config()

const config = {
    port: process.env.port || 4000,     // The port on which the server will run.
    numberOfWordsReturned: 10,          // Number of words returned from the GET '/words' endpoint. MAX 15.
}

export default config