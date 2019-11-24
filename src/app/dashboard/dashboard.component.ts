import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Name: string;
  DocumentType: string;
  DocumentsubType: string;

  symbol:string;
  Expiry:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Name: 'Passport jpg', DocumentType: 'KYC Document', DocumentsubType:'IdentityProof', Expiry:'', symbol: 'H'},
  { Name: 'Passport jpg', DocumentType: 'KYC Document', DocumentsubType:'IdentityProof', Expiry:'', symbol: 'H'},
  { Name: 'Passport jpg', DocumentType: 'KYC Document', DocumentsubType:'IdentityProof', Expiry:'', symbol: 'H'},
  { Name: 'Passport jpg', DocumentType: 'KYC Document', DocumentsubType:'IdentityProof',Expiry:'',  symbol: 'H'},
 
 
];



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['Name', 'DocumentType', 'DocumentsubType', 'Expiry', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
