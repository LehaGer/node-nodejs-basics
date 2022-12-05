import { access, constants, rename as renameCommand } from 'node:fs/promises';

const FILE_EXCEPTION_ERROR_MSG = 'FS operation failed';
const WRONG_FILE_NAME = new URL('./files/wrongFilename.txt', import.meta.url);
const PROPER_FILE_NAME = new URL('./files/properFilename.md', import.meta.url);

const doesPathExists = async (path) => {

    try {

        await access(path, constants.F_OK);

        return true;

    } catch (e) {

        return false;
    }

}
const checkIfWrongFileExists = async () => {

    if(!await doesPathExists(WRONG_FILE_NAME)) {

        throw new Error(FILE_EXCEPTION_ERROR_MSG);

    }

}
const checkIfProperFileExists = async () => {

    if(await doesPathExists(PROPER_FILE_NAME)) {

        throw new Error(FILE_EXCEPTION_ERROR_MSG);

    }

}

const rename = async () => {

    try {

        await checkIfWrongFileExists();
        await checkIfProperFileExists();

        await renameCommand(WRONG_FILE_NAME, PROPER_FILE_NAME);

    } catch (e) {

        console.log(e.message);

    }

};

await rename();