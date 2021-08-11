import {Client, Intents} from "discord.js";
import ora from "ora";
import figlet from "figlet";
import chalk from "chalk";
import { parse as tomlParse } from "@iarna/toml";
import { readFileSync } from "fs";
import {config as dotenv} from "dotenv";
import {dirname, join} from "path";

const config = tomlParse(readFileSync(new URL('../config.toml', import.meta.url)), { encoding: "utf-8" });
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
dotenv();

client.on("ready", () => {
    const spinner = ora({
        text: 'Nathan are running babe',
        spinner: {
          frames: ['😎', '😪', '😡', '🥰'],
          interval: 300,
        },
      }).start();
    
      setTimeout(() => {
        spinner.stop();
        figlet(`Nathan ${config.version} \n ---------`, function(err, data) {
            if(err) {
                console.log('Something went wrong on initialisation...');
                console.dir(err);
                return;
            }
        console.log(data);
        console.log(chalk.green("Nathan, by skilouxe#0666 && created for StreamBox Discord server."));
        console.log(chalk.green(`Who i'm: ${config.version} are my current version, i'm running on ${client.guilds.cache.size} servers.`));
    });
      }, 750 * 10);
});


client.login(process.env.TOKEN);


