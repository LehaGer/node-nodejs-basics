import { writeFile, access, constants  } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

const FILE_CONTENT_TXT = 'I am fresh and young';
const FILE_EXCEPTION_ERROR_MSG = 'FS operation failed';
const FILE_PATH = new URL('./files/fresh.txt', import.meta.url);

const checkIfFileExists = async (path) => {

    await access(path, constants.F_OK);

    throw new Error(FILE_EXCEPTION_ERROR_MSG);

}

const create = async () => {

    try {

        await checkIfFileExists(FILE_PATH);

    } catch (error) {

        if(error.message !== FILE_EXCEPTION_ERROR_MSG) {

            const data = new Uint8Array(Buffer.from(FILE_CONTENT_TXT));
            const promise = writeFile(FILE_PATH, data);

            await promise;

        } else {

            throw error;

        }

    }

};

await create();

