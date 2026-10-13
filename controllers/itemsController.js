const { v4: uuidv4 } = require("uuid");
const { readItemsFromFile, writeItemsToFile } = require("../utils/itemsStore");

const getItems = (req, reply) => {
  const items = readItemsFromFile();
  return reply.send(items);
};

const getItem = (req, reply) => {
  const { id } = req.params;
  const items = readItemsFromFile();

  const item = items.find((item) => item.id === id);

  if (!item) {
    reply.code(404).send({ error: "Item not found" });
    return;
  }

  return reply.send(item);
};

const addItem = (req, reply) => {
  const { name, description } = req.body;
  const items = readItemsFromFile();

  const newItem = {
    id: uuidv4(),
    name,
    description,
  };

  items.push(newItem);
  writeItemsToFile(items);

  return reply.code(201).send(newItem);
};

const updateItem = (req, reply) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const items = readItemsFromFile();

  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    return reply.code(404).send({ error: "Item not found" });
  }

  const updatedItem = {
    ...existingItem,
    ...(name !== undefined && { name }),
    ...(description !== undefined && { description }),
  };

  items[index] = updatedItem;
  writeItemsToFile(items);

  return reply.code(200).send(updatedItem);
};

const deleteItem = (req, reply) => {
  const { id } = req.params;
  const items = readItemsFromFile();

  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    return reply.code(404).send({ error: "Item not found" });
  }

  const updatedItems = items.filter((item) => item.id !== id);
  writeItemsToFile(updatedItems);

  return reply.send({ message: `Item with id ${id} deleted successfully` });
};

module.exports = {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
};
