class Singleton  {
    static instance = new Singleton();
    static getInstance() {
        return Singleton.instance
    }
    constructor() {
        if (Singleton.instance) {

            throw new Error('there should be only one');
        }
    }
}
