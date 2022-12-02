const parseEnv = () => {

    Object.entries(process.env)
        .filter(envVar => envVar[0].startsWith('RSS_'))
        .forEach(rssVar => console.log(`${rssVar[0]}=${rssVar[1]}`));

};

parseEnv();