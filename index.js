import Discord from "discord.js";
import ora from "ora";
import { parse as tomlParse } from "@iarna/toml";
import { readFileSync } from "fs";
import {config as dotenv} from "dotenv";
import {dirname, join} from "path";

const config = tomlParse(readFileSync(join(dirname(new URL(import.meta.url).pathname), "..", "config.toml"), { encoding: "utf-8" }));
const client = new Discord.Client();
dotenv();

client.on("ready", () => {
    const spinner = ora('Loading smile 😏').start();
    // setup the loader 
    setTimeout(() => {
        spinner.color = 'yellow'; // Values: 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'
        spinner.text = 'Loading ego of Skilouxe 😔'
    }, 1000);
});


client.login(process.env.TOKEN);


