import { fork } from "node:child_process";

const SCRIPT_URL = new URL('./files/script.js', import.meta.url);

const spawnChildProcess = async (args) => {

    fork(SCRIPT_URL, args);

};

spawnChildProcess();