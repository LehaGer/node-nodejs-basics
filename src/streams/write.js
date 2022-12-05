import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const TARGET_FILE_URL = new URL('./files/fileToWrite.txt', import.meta.url);

const write = async () => {

    const file = createWriteStream(TARGET_FILE_URL);

    stdin.pipe(file);

};

await write();