import { access, constants, readdir } from 'node:fs/promises';

const FILE_EXCEPTION_ERROR_MSG = 'FS operation failed';
const FOLDER_URL = new URL('./files/', import.meta.url);

const doesPathExists = async (path) => {

    try {

        await access(path, constants.F_OK);

        return true;

    } catch (e) {

        return false;
    }

}
const checkIfFolderExists = async () => {

    if(!await doesPathExists(FOLDER_URL)) {

        throw new Error(FILE_EXCEPTION_ERROR_MSG);

    }

}

const list = async () => {

    try {

        await checkIfFolderExists();

        const filesArray = await readdir(FOLDER_URL)

        for (const file of filesArray) {

            console.log(file);

        }

    } catch (error) {

        throw error;

    }

};

await list();