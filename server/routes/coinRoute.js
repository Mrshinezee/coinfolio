import CoinController from '../controllers/CoinController';

const coinRoute = (app) => {
  app.get('/api/v1/latest', CoinController.getLatestCurrency);
};

export default coinRoute;