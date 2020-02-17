import CoinController from '../controllers/CoinController';
import AuthController from '../controllers/AuthController';

const coinRoute = (app) => {
  app.get('/api/v1/latest', CoinController.getLatestCurrency);
  app.post('/api/v1/register', AuthController.registration);
};

export default coinRoute;