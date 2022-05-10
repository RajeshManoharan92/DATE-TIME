const fs = require('fs/promises')
const res = require('express/lib/response')



module.exports.datefile = async (req, res, next) => {

    try {
        const data = await fs.readFile('current_date_time.txt', { encoding: 'utf8' });
        console.log(data);
        res.send(data)
    } catch (err) {
        console.log(err);
    }
}


module.exports.createRoom = async (req, res, next) => {
    try {
        const content = await (`Current Date and Time is  ${req.body.date}`)
        const response = await fs.writeFile('current_date_time.txt', content);
        console.log(content)
        res.send(response)
    } catch (err) {
        console.log(err);
    }
}


