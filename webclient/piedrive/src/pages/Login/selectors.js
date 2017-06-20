export const getSelector = () => ("login");

export const getEmail = (state) => (state[getSelector()].email);

export const getPassword = (state) => state[getSelector()].password;

export const getType = (state) => (state[getSelector()].type);

const getToken = () => ("token");

export const getAccessToken = (state) => {
    console.log(state);
    return state[getSelector()].token.access_token;
};

export const getTokenType = (state) => {
    console.log(state);
    return state[getSelector()].token.token_type;
};

class TokenState {
    constructor(state) {
        this.state = state["token"];
    }
}

class UserState {
    constructor(state){
        this.state = state["login"];
    }

    getEmail = () => {
        return this.state["email"];
    }

    getToken = () => {
        return new TokenState(this.state);
    }
}

export const getUser = (state) => {
    return new UserState(state);
};