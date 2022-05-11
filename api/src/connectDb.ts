import mongoose from 'mongoose';
import config from './config';

export const connectToDatabase = async (): Promise<void> => {
  const tryToConnect = async (connectionAttempt: number) => {
    try {
      await mongoose.connect(config.db.URI, config.db.options);
    } catch(e: any) {
      const errorMessage: string = e.message;
      if (errorMessage.includes('failed to connect to server')) {
        console.log(` !! Attempting to reconnect to db, attempt ${connectionAttempt} failed !!`)
        setTimeout(tryToConnect, 5000, connectionAttempt + 1);
      }
    }
  };

  await tryToConnect(0);
  const { connection } = mongoose;

  connection.on('connected', () => {
    console.log('MongoDb connected!');
  });
}