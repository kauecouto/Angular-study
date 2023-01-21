import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataForm } from 'src/app/models/dataForm';

@Component({
  selector: 'app-form-profile-edit',
  templateUrl: './form-profile-edit.component.html',
  styleUrls: ['./form-profile-edit.component.css']
})
export class FormProfileEditComponent implements OnInit {
  @Input() data!: DataForm
  @Output() isALivePopUpAgenda = new EventEmitter()
  invalid: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  
  onEmiterClosePopUp(){
    this.isALivePopUpAgenda.emit()
  }
}
