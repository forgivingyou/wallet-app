import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: string[][]=[["BMW , since 2017","Audi , since 2018","Mercedes , since 2017","Ferari , since 2019"],
  ["Lambo , since 2015","Bugati , since 2017","Jaguar , since 2016","A.Martin , since 2015"],
  ["Ford , since 2017","Acura , since 2019"]];

  constructor() { }

  ngOnInit() {
  }

}
