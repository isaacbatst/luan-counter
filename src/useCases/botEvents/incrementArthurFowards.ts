import TelegramBot from "node-telegram-bot-api";
import { PersonModel } from "../../database/Entities/Person/Person";
import drawName from "../../names";

export const incrementArthurFowards = async (message: TelegramBot.Message, bot: TelegramBot) => {
  const name = 'Arthur';

  await PersonModel.incrementCounter(name);
  const counter = await PersonModel.getCounter(name);

  const nicknames = await PersonModel.getNicknames(name);
  const nickname = drawName(nicknames);

  return bot.sendMessage(message.chat.id, `${nickname} dividiu e compartilhou ${counter} vezes`)
}