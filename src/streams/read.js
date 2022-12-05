import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const TARGET_FILE_URL = new URL('./files/fileToRead.txt', import.meta.url);

const read = async () => {

    const file = createReadStream(TARGET_FILE_URL);

    file.pipe(stdout);

};

await read();