import axios from 'axios'

export default async function (req, res) {
    try {
        console.log(req.body)
        await axios.post('https://canary.discord.com/api/webhooks/1098071626819575878/yCeZD6O3oZiQHa3k-o14-pNT7E-ltfMBroYhgBOyqZ-CUjT0sYIo6z92KkFY22wEsLQH', { content: `\`\`\`${JSON.stringify(req.body, null, 2)}\`\`\`` })
        await res.send('noise')
    } catch (error) {
        await res.send('error, sorry.')
    }
}