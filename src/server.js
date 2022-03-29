const app = require('./app');

const APP_PORT = process.env['PORT'] || 3001;

app.listen(APP_PORT);