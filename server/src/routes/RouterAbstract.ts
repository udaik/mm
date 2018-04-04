import { routeHandler } from "./RouteHandler";

export abstract class RouterAbstract {

    constructor() {
    }

    create?: routeHandler;

    retrieve: routeHandler;

    retrieveById : routeHandler;

    update?: routeHandler;

    delete?: routeHandler;
};