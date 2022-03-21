import mongoose from "mongoose";

class Database {
    constructor() {
        this.init();
        console.log('MongoDB connected');
    }

    init() {
        mongoose.connect('mongodb://localhost:27017/checkout-db');
    }
}

export default new Database();