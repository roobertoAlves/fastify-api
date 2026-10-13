let items = require("../Items");
const { v4: uuidv4 } = require("uuid");

const getItems = (req, reply) => {
  reply.send(items);
};

const getItem = (req, reply) => {
  const { id } = req.params;
  const item = items.find((item) => item.id === id);

  if (!item) {
    reply.code(404).send({ error: "Item not found" });
    return;
  }

  reply.send(item);
};

const addItem = (req, reply) => {
  const { name, description } = req.body;
  const newItem = {
    id: uuidv4(),
    name,
    description,
  };

  items = [...items, newItem];
  reply.code(201).send(newItem);
};

const deleteItem = (req, reply) => {
  const { id } = req.params;

  items = items.filter((item) => item.id !== id);

  reply.send({ message: `Item with id ${id} deleted successfully` });
};

const updateItem = (req, reply) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const existingItem = items.find((item) => item.id === id);

  if (!existingItem) {
    return reply.code(404).send({
      error: "Item not found",
    });
  }

  const updatedItem = {
    ...existingItem,
    ...(name !== undefined && { name }),
    ...(description !== undefined && { description }),
  };

  items = items.map((item) => (item.id === id ? updatedItem : item));

  return reply.code(200).send(updatedItem);
};

module.exports = {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
};
