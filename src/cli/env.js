const parseEnv = () => {

    let resultingStr = '';

    Object.entries(process.env)
        .filter(envVar => envVar[0].startsWith('RSS_'))
        .forEach((rssVar, index, array) => {
            resultingStr = resultingStr.concat(`${rssVar[0]}=${rssVar[1]}`);
            if(index < array.length - 1 ) resultingStr = resultingStr.concat(`; `);
        });

    console.log(resultingStr);

};

parseEnv();