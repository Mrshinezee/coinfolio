import axios from 'axios';

class CoinloreController {
static getAllCoins(req, res) {
    axios.get(' https://api.coinlore.net/api/tickers/',
      {
        params: {
          start: 90,
          limit: 100,
        }
      }
    )
    .then((response) => {
      res.status(201).json({
        success: true,
        message: 'coins Successfully retrived',
        coins: response.data,
      });
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    });
}
static getCoinById(req, res) {
  const coinId = parseInt(req.params.coinId, 10);
    axios.get(' https://api.coinlore.net/api/ticker/',
      {
        params: {
          id: coinId,
        }
      }
    )
    .then((response) => {
      res.status(201).json({
        success: true,
        message: 'coin Successfully retrived',
        coin: response.data,
      });
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    });
}
}

export default CoinloreController;