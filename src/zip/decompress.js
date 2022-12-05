import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';

const INITIAL_FILE_URL = new URL('./files/archive.gz', import.meta.url);
const RESULTING_FILE_URL = new URL('./files/fileToCompress.txt', import.meta.url);

const decompress = async () => {

    const unzip = createUnzip();
    const input = createReadStream(INITIAL_FILE_URL);
    const output = createWriteStream(RESULTING_FILE_URL);

    input.pipe(unzip).pipe(output);

};

await decompress();