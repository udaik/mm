import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material';
import { MatListItem } from '@angular/material';
import { MatNavList } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';


@Component({
    selector: 'app-header-toolbar',
    templateUrl: './header-toolbar.component.html',
    styleUrls: ['./header-toolbar.component.css']
})
export class HeaderToolbarComponent implements OnInit {

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
        },
        {
            type: 'Wallets',
            accounts: [{
                name: 'My Wallet',
            },
            {
                name: "PayTM"
            }]
        },
        {
            type: 'Small Savings',
            accounts: [{
                name: 'EPF'
            },
            {
                name: "PPF"
            }]
        },
        {
            type: 'Banks',
            accounts: [{
                icon: '',
                institution: 'SBI',
                name: 'SBI Savings',
            },
            {
                icon: '',
                institution: 'SBI',
                name: 'SBI Home Loan',
            },
            {
                icon: '',
                institution: 'HDFC',
                name: 'HDFC Joint',
            },
            {
                icon: '',
                institution: 'ICICI',
                name: 'ICICI',
            }],
        },
        {
            type: 'Credit Cards',
            accounts: [{
                icon: '',
                institution: 'SBI',
                name: 'SBI CC',
            },
            {

                icon: '',
                institution: 'HDFC',
                name: 'HDFC CC',
            }],
        },
        {
            type: 'Insurances',
            accounts: [{
                icon: '',
                institution: 'Bajaj_Allianz',
                name: 'Bajaj Allianz',
            },
            {
                icon: '',
                institution: 'HDFC',
                name: 'HDFC Ergo',
            }],
        }]
    };

    fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);

    tiles = [
        { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
        { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
        { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
        { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    ];

    constructor(public dialog: MatDialog) {
        // this.userPortfolio = this.restangular.all('dishes');
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    ngOnInit() {
    }
}

export class DialogOverviewExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}