// imports
const axios = require('axios')


const indexPage = async (req, res) => {
    console.log(req.body)
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        res.send(`
                    <div style="font-family: sans-serif">
                        ${response.data[0].title}
                    </div>
                `)
    } catch (e) {
        console.log(e)
    }
}

module.exports = indexPage