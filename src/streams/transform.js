import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {

    class StrReverseTransform extends Transform {

        constructor(options) {
            super(options);
        }

        _transform = (chunk, encoding, callback) => {
            callback(null, chunk.toString().split("").reverse().join(""));
        }

    }

    stdin.pipe(new StrReverseTransform).pipe(stdout);

};

await transform();