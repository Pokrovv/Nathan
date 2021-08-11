import {Client, Intents} from "discord.js";
import ora from "ora";
import { parse as tomlParse } from "@iarna/toml";
import { readFileSync } from "fs";
import {config as dotenv} from "dotenv";
import {dirname, join} from "path";

const config = tomlParse(readFileSync(new URL('../config.toml', import.meta.url)), { encoding: "utf-8" });
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
dotenv();

client.on("ready", () => {
    const spinner = ora('Loading smile 😏').start();
    // setup the loader 
    setTimeout(() => {
        spinner.color = 'green'; // Values: 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'
        spinner.text = '😎 Nathan are running babe'
    }, 1000);
});


client.login(process.env.TOKEN);


