import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

let INITIAL_INPUT_VALUE = 10;
const WORKER_FILE_URL = new URL('./worker.js', import.meta.url);

const performCalculations = async () => {

    const cpuCores = cpus();
    const resultingArray = [];

    cpuCores.forEach((_, index, array) => {

        let result,
            status = 'resolved';

        const wt = new Worker(WORKER_FILE_URL, {
            workerData: INITIAL_INPUT_VALUE++
        });

        wt.on('message', msg => {

            if(msg?.type === 'computedValue') {
                result = msg?.payload;
            }

        });
        wt.on('error', () => {

            status = 'error';

        });
        wt.on('exit', () => {

            resultingArray[index] = {
                status: status,
                data: result,
            };

            if(resultingArray.filter(el => !!el).length === array.length) {
                console.log(resultingArray);
            }

        });

    })

};

await performCalculations();