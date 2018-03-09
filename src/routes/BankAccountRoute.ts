import { Router, NextFunction, Request, Response } from "express";
import { BankAccountController } from "../controllers/BankAccountController";
import { Logger } from 'log4js';

export class BankAccountRoute {

  private controller: BankAccountController;
  private app: Router;

  constructor(logging: Logger, app: Router) {
    this.controller = new BankAccountController(logging);
    // this.app.post('bankAccount', this.controller.create);
    // this.app.get('bankAccount', this.controller.findAll);
    // this.app.put('bankAccount/:bankAccountId', this.controller.update);
    // this.app.delete('bankAccount/:bankAccountId', this.controller.delete);
  }
}