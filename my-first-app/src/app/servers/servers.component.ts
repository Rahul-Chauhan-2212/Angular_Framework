import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template : `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowAddNewServer = false;
  serverCreationStatus = 'No Server Created!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowAddNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = this.serverName + ' Server was created!';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
