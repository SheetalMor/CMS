import mongoose from "mongoose";

export default class MongoDB {
  private configURL: string;
  constructor() {
    this.configURL = 'mongodb://localhost:27017/movies';
  }
  public connect(): void {
    mongoose.connect(this.configURL).then(() => console.log('You are now connected to mongoDB')).catch((err) => console.log('MongoDB connection failed!'));
  }
}