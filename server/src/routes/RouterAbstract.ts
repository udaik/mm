import { routeHandler } from "./RouteHandler";

export abstract class RouterAbstract {

    constructor() {
    }

    create?: routeHandler;

    retrieve: routeHandler;

    update?: routeHandler;

    delete?: routeHandler;
};