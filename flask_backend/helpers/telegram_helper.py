from helpers.common import *
import telegram

def sendTeleMessage(message="default message"):
    bot = telegram.Bot(token=env("TELEGRAM_BOT_TOKEN"))
    bot.send_message(chat_id=env("TELEGRAM_CHAT_ID") , text=message)
    return {"status":"success", "message sent": message}
