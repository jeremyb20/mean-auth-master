const users = [];

// Join user to chat
function userJoin(id, username, status) {
  const user = { id, username, status };

  users.push(user);

  return user;
}

function userLeave(client) {
  const index = users.findIndex(user => user.id === client.id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

module.exports = {
    userJoin,
    userLeave
};
  