import { Router } from "express";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";
import { Request, Response, NextFunction } from "express-serve-static-core";
import { BankAccount } from "../models/BankAccountModel";
import { Model } from "mongoose";
import { Dictionary } from "typescript-collections";

export class AccountRoute extends RouterAbstract {

    private modelsDict: Dictionary<string, Model<any>>;

    constructor(logging: Logger, router: Router) {
        super(logging, router);
        this.logging = logging;
        this.router = router;
        this.modelsDict = new Dictionary<string, Model<any>>();
        this.modelsDict.setValue('BANK_ACCOUNT', BankAccount);
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        console.log(req.body);
        console.log(req.body.type);
        console.log(this.modelsDict);

        var objModel = this.modelsDict.getValue(req.body.type)
        var dataObj = new objModel(req.body.data);

        dataObj.userInfo.userId = req.params.id;
        dataObj.save().then((obj: any) => {
            resp.statusCode = 200;
            resp.send(obj);
        }).catch((err: any) => {
            resp.statusCode = 400;
            resp.send(err);
        });
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {

        switch (req.body.type) {
            case 'BANK_ACCOUNT': {
                BankAccount.find({ 'userInfo.userId': req.params.userId }).then((accounts) => {
                    resp.statusCode = 200;
                    resp.send(accounts)
                });
                break;
            }
        }
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        switch (req.body.type) {
            case 'BANK_ACCOUNT': {
                let q = {
                    'userInfo.userId': req.params.id,
                    'name': req.body.data.name
                }

                BankAccount.update(q, req.body.data).then((accounts) => {
                    console.log(accounts);
                    resp.statusCode = 200;
                    resp.send(accounts)
                }).catch((err) => {
                    resp.statusCode = 400;
                    resp.send(err);
                });

                break;
            }
        }
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        switch (req.body.type) {
            case 'BANK_ACCOUNT': {
                let q = {
                    'userInfo.userId': req.params.id,
                    'name': req.body.data.name
                }

                BankAccount.deleteOne(q).then((account) => {
                    resp.statusCode = 200;
                    resp.send(account);
                }).catch((err) => {
                    resp.statusCode = 400;
                    resp.send(err);
                });

                break;
            }
        }
    }

    mount = (mount_path: string): void => {

        this.logging.debug("AccountRoute ", mount_path);

        this.router.put(mount_path, this.create);
        this.logging.debug("route create : put ", mount_path);

        this.router.get(mount_path, this.retrieve);
        this.logging.debug("route retrieve : get ", mount_path);

        this.router.post(mount_path, this.update);
        this.logging.debug("route update : post ", mount_path);

        this.router.delete(mount_path, this.delete);
        this.logging.debug("route delete : delete ", mount_path);
    }
}