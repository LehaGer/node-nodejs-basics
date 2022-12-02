const parseEnv = () => {

    let resultingStr = '';

    Object.entries(process.env)
        .filter(envVar => envVar[0].startsWith('RSS_'))
        .forEach(rssVar => {
            resultingStr = resultingStr.concat(`${rssVar[0]}=${rssVar[1]}; `)
        });

    console.log(resultingStr);

};

parseEnv();