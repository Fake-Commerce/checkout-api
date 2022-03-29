const mongoose = require("mongoose");

class Database {
    constructor() {
        this.init();
        console.log('MongoDB connected');
    }

    init() {
        mongoose.connect('mongodb://localhost:27017/checkout');
    }
}

module.exports = new Database();