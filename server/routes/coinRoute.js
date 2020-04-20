import CoinController from '../controllers/CoinController';
import CoinloreController from '../controllers/CoinloreController';
import AuthController from '../controllers/AuthController';
import UserMiddleware from '../middleware/user';

const coinRoute = (app) => {
  app.get('/api/v1/coins', UserMiddleware.validToken, CoinloreController.getAllCoins);
  app.get('/api/v1/coin/:coinId', UserMiddleware.validToken, CoinloreController.getCoinById);
  app.get('/api/v1/latest', CoinController.getLatestCurrency);
  app.post('/api/v1/register', AuthController.registration);
  app.post('/api/v1/login', AuthController.userLogin);
};

export default coinRoute;