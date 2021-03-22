module.exports = (rota, app, service) => {

  app.post(rota, service.create);

  app.get(rota, service.all);

  app.get(rota+'/:id', service.get);

  app.put(rota, service.update);

  app.delete(rota+'/:id', service.delete);
};