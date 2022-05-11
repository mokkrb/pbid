export interface Config {
  db: {
    URI: string;
    options: {
      user: string;
      pass: string;
    };
  };
}

const mongoURL = `${process.env.MONGO_URL || 'mongodb://mongo'}/${process.env.ENV || 'local'}_pBid`;

const config: Config = {
  db: {
    URI: mongoURL,
    options: {
      user: process.env.MONGO_USER || '',
      pass: process.env.MONGO_PASS || '',
    },
  },
};

export default config;