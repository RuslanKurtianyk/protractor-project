exports.config = {
    directConnect: true,
    specs: ['specs/*.js'],
    framework: 'jasmine',

    onPrepare: () => {
        browser.manage().window().setSize(1024, 800);
    },

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
            ],
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        defaultTimeoutInterval: 50000
    }
};