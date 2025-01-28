
const users = new Map();

const store = {
  users: {
    create: (userData) => {
      const id = Date.now().toString();
      users.set(id, { ...userData, id });
      return { ...userData, id };
    },
    findByEmail: (email) => {
      return Array.from(users.values()).find(user => user.email === email);
    },
    getAll: () => Array.from(users.values())
  }
};

module.exports = store;