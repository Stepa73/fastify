import mongoose, { Document } from 'mongoose';

export interface IUser {
  name: string,
  age: number,
}

export interface IUserModel extends IUser, Document {}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
});

export default mongoose.model<IUserModel>('User', userSchema);
