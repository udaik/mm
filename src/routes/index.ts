import { NextFunction, Request, Response, Router } from "express";
import { BankAccountRoute } from "./BankAccountRoute";
import { Logging } from "../logging/Logging";
import { BaseRoute } from "./route";
import { Logger } from "log4js";


/**
 * / route
 *
 * @class User
 */
export class IndexRoute extends BaseRoute {
  logging: Logger;

  /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(logging: Logger, router: Router) {
    //log
    console.log("[IndexRoute::create] Creating index route.");

    //add home page route
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute(router).index(req, res, next);
    });

    var br: BankAccountRoute;
    br = new BankAccountRoute(logging, router);

  }

  /**
   * Constructor
   *
   * @class IndexRoute
   * @constructor
   */
  constructor(router: Router) {
    super();
  }

  /**
   * The home page route.
   *
   * @class IndexRoute
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public index(req: Request, res: Response, next: NextFunction) {
    //set custom title
    this.title = "Home | Tour of Heros";

    //set message
    let options: Object = {
      "message": "Welcome to the Tour of Heros"
    };

    //render template
    this.render(req, res, "index", options);
  }
}