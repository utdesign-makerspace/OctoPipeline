import fastify from "fastify";

const app = fastify({
  logger: false,
});

app.get("/", (req, reply) => {
  reply.send({ hello: "world" });
})

app.listen(3000);