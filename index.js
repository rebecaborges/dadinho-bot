require('dotenv').config()

const telegramBot = require('node-telegram-bot-api')
const TOKEN = process.env.TOKEN_BOT
const bot = new telegramBot(TOKEN, {polling: true})

const express = require('express')
const app = express()

app.get('/', (req, res) => {

  res.send('Bem vindos ao Dadinho Bot!')
})

bot.on('message', (msg) => {
  const chatId = msg.chat.id

  console.log(msg)

  bot.sendMessage(chatId, `${msg.text}`)
})

app.listen(process.env.PORT || 3000, () => {
  console.log('alo adriano ta me ouvindo?')
})

