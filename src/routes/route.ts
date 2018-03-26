export class BaseRoute {

    protected title: string;

    private scripts: string[];

    constructor() {
        this.title = "Tour of Heros";
        this.scripts = [];
    }

    public addScript(src: string): BaseRoute {
        this.scripts.push(src);
        return this;
    }
}