const parseArgs = () => {

    let resultingStr = '';

    process.argv
        .reduce((accumulator, arg, index, array) => {
        if(arg.startsWith('--')) {
            return [
                ...accumulator,
                {
                    name: arg,
                    value: array[index+1],
                }
            ]
        } else {
            return accumulator;
        }
    }, [])
        .forEach((arg, index, array) => {

            resultingStr = resultingStr.concat(`${arg.name} is ${arg.value}`);
            if(index < array.length - 1) resultingStr = resultingStr.concat(`, `);

        })

    console.log(resultingStr);
};

parseArgs();