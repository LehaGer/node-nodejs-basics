import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const INITIAL_FILE_URL = new URL('./files/fileToCompress.txt', import.meta.url);
const RESULTING_FILE_URL = new URL('./files/archive.gz', import.meta.url);

const compress = async () => {

    const gzip = createGzip();
    const input = createReadStream(INITIAL_FILE_URL);
    const output = createWriteStream(RESULTING_FILE_URL);

    input.pipe(gzip).pipe(output);

};

await compress();