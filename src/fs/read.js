import { access, constants, readFile } from 'node:fs/promises';

const FILE_EXCEPTION_ERROR_MSG = 'FS operation failed';
const TARGET_FILE_URL = new URL('./files/fileToRead.txt', import.meta.url);

const doesPathExists = async (path) => {

    try {

        await access(path, constants.F_OK);

        return true;

    } catch (e) {

        return false;
    }

}
const checkIfTargetFileExists = async () => {

    if(!await doesPathExists(TARGET_FILE_URL)) {

        throw new Error(FILE_EXCEPTION_ERROR_MSG);

    }

}

const read = async () => {

    try {

        await checkIfTargetFileExists();

        console.log(await readFile(TARGET_FILE_URL, { encoding: 'utf8' }));

    } catch (error) {

        throw error;

    }

};

await read();