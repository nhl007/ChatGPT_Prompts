import mongoose, { ConnectOptions } from 'mongoose';

const mode = process.env.MODE;

const uri: string =
  mode === 'PROD'
    ? (process.env.MONGO_PROD_URL as string)
    : (process.env.DB_LOCAl_URI as string);

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(uri, {
      dbName: 'Gpt_Prompts',
    });

    isConnected = true;

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};
