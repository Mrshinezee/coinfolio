import coinRoute from  './coinRoute';

const routes = (app) => {
  console.log('came here');
  app.get('/', (request, response) => response.status(200).json({
    message: 'coin Application',
  }));

  app.get('/api/v1', (request, response) => response.status(200).json({
    message: 'Welcome to coin view App API, Version 1',
  }));
  
  coinRoute(app)
};

export default routes;