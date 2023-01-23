import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-historic-pomo',
  templateUrl: './historic-pomo.component.html',
  styleUrls: ['./historic-pomo.component.css']
})
export class HistoricPomoComponent implements OnInit {
  historic: any
  constructor(
    private serviceDataBase: DataBaseService
    ) { }

  ngOnInit(): void {
    this.getHistoric()
  }

  getHistoric(){
    this.serviceDataBase.getAll(`usuários/${localStorage.getItem('key')}/historico_Estudo`).subscribe(
      result => {
        this.historic = result
        console.log(this.historic)
      }
    )
  }

}
