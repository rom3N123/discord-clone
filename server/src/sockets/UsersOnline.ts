export const usersOnline = {
  usersOnline: {},
  usersIdBySocketIds: {},

  store(socketId: string, userId: string) {
    this.usersOnline[userId] = socketId;
    this.usersIdBySocketIds[socketId] = userId;
  },

  deleteByUserId(userId: string) {
    const socketId = this.usersOnline[userId];
    this.deleteFromStore(socketId, userId);
  },

  deleteBySocketId(socketId: string) {
    const userId = this.usersIdBySocketIds[socketId];
    this.deleteFromStore(socketId, userId);
  },

  getSocketIdByUserId(userId: string) {
    return this.usersOnline[userId];
  },

  getUserIdBySocketId(socketId: string) {
    return this.usersIdBySocketIds[socketId];
  },

  getSocketsByUsersIds(userIds: string[]): string[] {
    return userIds.reduce((total, userId) => {
      const socketId = this.getSocketIdByUserId(userId);

      if (socketId) {
        total.push(socketId);
      }

      return total;
    }, []);
  },

  emitIfUsersOnline(userIds: string[], callback: (socketId: string) => any) {
    const socketIds: string[] = this.getSocketsByUsersIds(userIds);

    socketIds.forEach(callback);
  },

  ifOnline(userId: string, callback: (socketId: string) => any) {
    const socketId = this.getSocketIdByUserId(userId);

    if (socketId) {
      callback(socketId);
    }
  },

  deleteFromStore(socketId: string, userId: string) {
    delete this.usersOnline[userId];
    delete this.usersIdBySocketIds[socketId];
  },

  getIsOnline(userId: string) {
    return Boolean(this.usersOnline[userId]);
  },
};
