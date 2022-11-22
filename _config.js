var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://felix_kinaro2:12344321@cluster0.mzad3gs.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://felix_kinaro2:12344321@cluster0.mzad3gs.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://felix_kinaro2:12344321@cluster0.mzad3gs.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
