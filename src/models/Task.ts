import { BSON, Realm } from "realm";

// Define the Task model
export class Task extends Realm.Object {
  _id: BSON.ObjectId = new BSON.ObjectId();
  description!: string;
  isComplete: boolean = false;
  createdAt: Date = new Date();
  user_id!: string;

  static primaryKey = "_id";
}
