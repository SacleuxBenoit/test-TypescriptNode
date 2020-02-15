module.exports = {
    transform:{
        "^.+\\.ts$": "ts-jest"
    },
    testMatch:[
        '**/test/**/*.test.(ts|js)'
    ],
    testEnvironment: 'node'
}