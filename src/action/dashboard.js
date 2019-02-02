// import axios from 'axios';
import { FETCH_LATEST_CRYPTO } from '../actionType/dashboard';

// object
const coin = [
  {
    "id": 1,
    "name": "Bitcoin",
    "symbol": "BTC",
    "slug": "bitcoin",
    "circulating_supply": 17418100,
    "total_supply": 17418100,
    "max_supply": 21000000,
    "date_added": "2013-04-28T00:00:00.000Z",
    "num_market_pairs": 6682,
    "tags": [
        "mineable"
    ],
    "platform": null,
    "cmc_rank": 1,
    "last_updated": "2018-12-11T21:53:21.000Z",
    "quote": {
        "USD": {
            "price": 3444.01313917,
            "volume_24h": 4687059015.75648,
            "percent_change_1h": 0.794972,
            "percent_change_24h": -1.35299,
            "percent_change_7d": -12.9181,
            "market_cap": 59988165259.376976,
            "last_updated": "2018-12-11T21:53:21.000Z"
        }
    }
},
{
  "id": 2,
  "name": "Ripple",
  "symbol": "XRP",
  "slug": "ripple",
  "circulating_supply": 17418100,
  "total_supply": 17418100,
  "max_supply": 21000000,
  "date_added": "2013-04-28T00:00:00.000Z",
  "num_market_pairs": 6682,
  "tags": [
      "mineable"
  ],
  "platform": null,
  "cmc_rank": 1,
  "last_updated": "2018-12-11T21:53:21.000Z",
  "quote": {
      "USD": {
          "price": 3444.01313917,
          "volume_24h": 4687059015.75648,
          "percent_change_1h": 0.794972,
          "percent_change_24h": -1.35299,
          "percent_change_7d": -12.9181,
          "market_cap": 59988165259.376976,
          "last_updated": "2018-12-11T21:53:21.000Z"
      }
  }
},
{
  "id": 3,
  "name": " Ethereum",
  "symbol": "ETH",
  "slug": "ethereum",
  "circulating_supply": 17418100,
  "total_supply": 17418100,
  "max_supply": 21000000,
  "date_added": "2013-04-28T00:00:00.000Z",
  "num_market_pairs": 6682,
  "tags": [
      "mineable"
  ],
  "platform": null,
  "cmc_rank": 1,
  "last_updated": "2018-12-11T21:53:21.000Z",
  "quote": {
      "USD": {
          "price": 3444.01313917,
          "volume_24h": 4687059015.75648,
          "percent_change_1h": 0.794972,
          "percent_change_24h": -1.35299,
          "percent_change_7d": -12.9181,
          "market_cap": 59988165259.376976,
          "last_updated": "2018-12-11T21:53:21.000Z"
      }
  }
},
{
  "id": 4,
  "name": "Litecoin",
  "symbol": "LTC",
  "slug": "litecoin",
  "circulating_supply": 17418100,
  "total_supply": 17418100,
  "max_supply": 21000000,
  "date_added": "2013-04-28T00:00:00.000Z",
  "num_market_pairs": 6682,
  "tags": [
      "mineable"
  ],
  "platform": null,
  "cmc_rank": 1,
  "last_updated": "2018-12-11T21:53:21.000Z",
  "quote": {
      "USD": {
          "price": 3444.01313917,
          "volume_24h": 4687059015.75648,
          "percent_change_1h": 0.794972,
          "percent_change_24h": -1.35299,
          "percent_change_7d": -12.9181,
          "market_cap": 59988165259.376976,
          "last_updated": "2018-12-11T21:53:21.000Z"
      }
  }
},
{
 "id": 5,
  "name": "Ripple",
  "symbol": "XRP",
  "slug": "ripple",
},
{
  "id": 6,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 7,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 8,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 9,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 10,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 11,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 12,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 13,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 14,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 15,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 16,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 17,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 18,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 19,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 20,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
  "id": 5,
   "name": "Ripple",
   "symbol": "XRP",
   "slug": "ripple",
 },
 {
   "id": 6,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
   "id": 7,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
   "id": 8,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
   "id": 9,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
   "id": 10,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
   "id": 11,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
   "id": 12,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
   "id": 13,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
   "id": 14,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
   "id": 15,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
   "id": 16,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
   "id": 17,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
   "id": 18,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
   "id": 19,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
   "id": 20,
    "name": "Ripple",
    "symbol": "XRP",
    "slug": "ripple",
  },
  {
    "id": 5,
     "name": "Ripple",
     "symbol": "XRP",
     "slug": "ripple",
   },
   {
     "id": 6,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
     "id": 7,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
     "id": 8,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
     "id": 9,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
     "id": 10,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
     "id": 11,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
     "id": 12,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
     "id": 13,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
     "id": 14,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
     "id": 15,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
     "id": 16,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
     "id": 17,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
     "id": 18,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
     "id": 19,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
     "id": 20,
      "name": "Ripple",
      "symbol": "XRP",
      "slug": "ripple",
    },
    {
      "id": 5,
       "name": "Ripple",
       "symbol": "XRP",
       "slug": "ripple",
     },
     {
       "id": 6,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
      {
       "id": 7,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
      {
       "id": 8,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
      {
       "id": 9,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
      {
       "id": 10,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
      {
       "id": 11,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
      {
       "id": 12,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
      {
       "id": 13,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
      {
       "id": 14,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
      {
       "id": 15,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
      {
       "id": 16,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
      {
       "id": 17,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
      {
       "id": 18,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
      {
       "id": 19,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
      {
       "id": 20,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
      },
 
];

// Action creator
const getLatestCrypto = response => ({
    type: FETCH_LATEST_CRYPTO,
    // payload: response.data,
    payload: response,
    loading: false,
  });

const fetchLatestCrypto = () => (dispatch) => {
    // return axios.get('http://127.0.0.1:4500/api/v1/latest',
    // )
    // .then((response) => {
      return dispatch(getLatestCrypto(coin));
    // })
    // .catch(error => {
    //   console.log('err', error)
    // });
}  

export default fetchLatestCrypto;