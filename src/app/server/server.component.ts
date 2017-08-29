import { Component, OnInit } from '@angular/core';
import { SuccessComponent } from '../success/success.component';
import { WarningComponent } from '../warning/warning.component';

@Component({
  selector:'app-server',
  templateUrl: './server.component.html',
  styleUrls:['./server.component.css']
})

export class ServerComponent {

  title = 'Dentro do Server Component!';
  serverName = 'Oblivion';
  serverCreated:boolean = false;

  onCreateServer() {
  this.serverCreated = !this.serverCreated;
  }

  getColor(){
    return this.serverCreated === true ? 'green' : 'red' ;
  }

}
