export default class State {
    private static instance: State;
    private token: string;
    public userName: string;
    private constructor(UserName: string, Token: string) {
        this.userName = UserName;
        this.token = Token;
    }
    static getInstance() {
        if (!State.instance) {
            State.instance = new State("Сержант табуретка", "removeMeToken");
        }
        return State.instance;
    }
    public isLoggedIn (): boolean {
        console.log("isLoggedIn: " + (!(this.token === "")).toString())
        return !(this.token === "");
    }
}