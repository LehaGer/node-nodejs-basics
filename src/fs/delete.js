import { access, constants, rm } from 'node:fs/promises';

const FILE_EXCEPTION_ERROR_MSG = 'FS operation failed';
const FILE_TO_REMOVE = new URL('./files/fileToRemove.txt', import.meta.url);

const doesPathExists = async (path) => {

    try {

        await access(path, constants.F_OK);

        return true;

    } catch (e) {

        return false;
    }

}
const checkIfRemovingFileExists = async () => {

    if(!await doesPathExists(FILE_TO_REMOVE)) {

        throw new Error(FILE_EXCEPTION_ERROR_MSG);

    }

}

const remove = async () => {

    try {

        await checkIfRemovingFileExists();

        await rm(FILE_TO_REMOVE);


    } catch (error) {

        throw error;

    }

};

await remove();