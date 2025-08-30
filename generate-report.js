const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
    jsonDir: 'cypress/reports/cucumber-json-output.json', // pasta onde está o JSON
    reportPath: 'cypress/reports/', // pasta onde vai o HTML
    metadata: {
        browser: {
            name: 'chrome',
            version: 'latest'
        },
        device: 'Local Machine',
        platform: {
            name: 'macOS',
            version: 'Ventura'
        }
    },
    customData: {
        title: 'Dados do teste',
        data: [
            { label: 'Projeto', value: 'Desafio Accenture' },
            { label: 'QA', value: 'Rafael Suzano' },
            { label: 'Execução', value: new Date().toLocaleString() }
        ]
    },
    reportName: 'Relatório BDD'
});
