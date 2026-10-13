const fastify = require(`fastify`)({ logger: true });
fastify.register(require("@fastify/swagger"), {
  openapi: {
    info: {
      title: "Fastify API",
      description: "A simple API built with Fastify",
      version: "1.0.0",
    },
  },
});

fastify.register(require("@fastify/swagger-ui"), {
  routePrefix: "/docs",
});

fastify.register(require(`./routes/items`));

const PORT = 8000;

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
