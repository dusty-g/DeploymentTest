import { Component, OnInit } from '@angular/core';
import {User} from "./../user"
import {ShareDataService} from "./../share-data.service"
import {Router} from "@angular/router"


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  winner = 0
  players = []
  constructor(private _dataService: ShareDataService, private _router: Router) {
    this._dataService.observedPlayers.subscribe(
      players => this.players = players, err=> console.log(err), ()=>{}
    )
    if (!this.players){
      this._router.navigate(["/"])
    }else{
      (this.players[0].score > this.players[1].score) ? this.winner = 0 : this.winner = 1
    }
   }

  ngOnInit() {
    
    
  }

}
