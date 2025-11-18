const moonoose = require('mongoose');

async function startDB() {
    await moonoose.connect('mongodb+srv://guilhermebrandao:1311Phgui@cluster0.r3kmqr8.mongodb.net/?appName=Cluster0');
}
module.exports = startDB;