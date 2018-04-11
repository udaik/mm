import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    user: string;

    userPortfolio = {
        portfolio: [{
            type: 'Overview',
            accounts: [{
                name: 'Overview',
            },
            {
                name: 'Assets',
            },
            {
                name: 'Liabilities'
            },
            {
                name: 'Expenses'
            }]
        }]
    };


    constructor() {
        this.user = 'Eggs';
    }

    ngOnInit() {
    }

}
