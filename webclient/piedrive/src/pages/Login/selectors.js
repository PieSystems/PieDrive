export const getSelector = () => ("login");

export const getEmail = (state) => (state[getSelector()].email);

export const getPassword = (state) => state[getSelector()].password;

export const getType = (state) => (state[getSelector()].type);