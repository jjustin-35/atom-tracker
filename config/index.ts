let HOST = 'http://localhost:3000';

switch (process.env.NODE_ENV) {
  case 'development':
    HOST = 'https://atom-tracker-git-preparing-jjustin-35.vercel.app';
    break;
  case 'production':
    HOST = 'https://atom-tracker.vercel.app';
    break;
  default:
    break;
}

const configs = {
  HOST,
};

export default configs;
