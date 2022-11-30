import { writeFile, access, constants, readdir, mkdir, readFile } from 'node:fs/promises';

const FILE_EXCEPTION_ERROR_MSG = 'FS operation failed';
const DIR_PATH_INIT = new URL('./files/', import.meta.url);
const DIR_PATH_TARGET = new URL('./files_copy/', import.meta.url);

const doesPathExists = async (path) => {

    try {

        await access(path, constants.F_OK);

        return true;

    } catch (e) {

        return false;
    }

}
const checkIfInitFolderExists = async () => {

    if(!await doesPathExists(DIR_PATH_INIT)) {

        throw new Error(FILE_EXCEPTION_ERROR_MSG);

    }

}
const checkIfTargetFolderExists = async () => {

    if(await doesPathExists(DIR_PATH_TARGET)) {

        throw new Error(FILE_EXCEPTION_ERROR_MSG);

    }

}

const copy = async () => {

    try {

        await checkIfInitFolderExists();
        await checkIfTargetFolderExists();

        const initDirFiles = await readdir(DIR_PATH_INIT);
        await mkdir(DIR_PATH_TARGET, { recursive: true });

        for await (const initDirFile of initDirFiles) {

            const initFilePath = new URL(`${DIR_PATH_INIT}${initDirFile}`, import.meta.url);
            const initFileContent = await readFile(initFilePath, { encoding: 'utf8' });

            const targetFilePath = new URL(`${DIR_PATH_TARGET}${initDirFile}`, import.meta.url);
            await writeFile(targetFilePath, initFileContent);

        }

    } catch (e) {

        throw e;

    }

};

await copy();