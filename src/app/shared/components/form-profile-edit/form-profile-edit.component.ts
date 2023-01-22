import { Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { dataProfile } from 'src/app/models/dataProfile';
import { DataBaseService } from 'src/app/services/data-base.service';
import { AngularFireStorage } from '@angular/fire/compat/storage'
import { elementAt } from 'rxjs';
import { compilePipeFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-form-profile-edit',
  templateUrl: './form-profile-edit.component.html',
  styleUrls: ['./form-profile-edit.component.css']
})
export class FormProfileEditComponent implements OnInit{
  obj: any
  categorysCurrent: any = []
  inputCategory!: string
  data: dataProfile = {
    name: '',
    email: '',
    fotoProfile: '',
    theme: '',
    timePomo: '',
    pausaPomo: '',
    categorysAgenda: ['']
  }
  @Input() isAliveForm!: boolean
  @Output() closeForm = new EventEmitter()
  invalid: boolean = false
  @Input() nameForm!: string
  path!: string
  constructor(private serviceDataBase: DataBaseService,
    private storageFirebase: AngularFireStorage) { }

  ngOnInit(): void {
    this.getDados()
    
  }

  onEmiterClosePopUp(){
    this.closeForm.emit()
  }

  uploadFoto($event: any){
    this.path = $event.target.files[0]
  }

  getDados(){
    this.serviceDataBase.getAll(`usuários/${localStorage.getItem('key')}`).subscribe( {
      next: result => {
        this.obj = result[0]
        this.data.name = this.obj.name
        this.data.email = this.obj.email
        this.data.fotoProfile = this.obj.fotoProfile
        this.data.theme = this.obj.theme
        this.data.timePomo = this.obj.timePomo
        this.data.pausaPomo = this.obj.pausaPomo
        this.data.categorysAgenda = this.obj.categorysAgenda
        if(this.categorysCurrent.length == 0){
          for( let i = 0; i <= Object.keys(this.data.categorysAgenda).length - 1; i++){
            this.categorysCurrent.push(this.data.categorysAgenda[i])
          } 
        }
        
    },
      error: err => console.error(err)
    }
    ) 
  }

  recordDb(){
    this.data.categorysAgenda = this.categorysCurrent
    this.serviceDataBase.update(`usuários/${localStorage.getItem('key')}`,this.obj.key, this.data)

    if(this.nameForm == 'foto'){
      this.storageFirebase.upload('/imagens/'+this.data.name, this.path).then( result => {
          result.ref.getDownloadURL().then( result => {
            this.data.fotoProfile = result
            this.serviceDataBase.update(`usuários/${localStorage.getItem('key')}`,this.obj.key, this.data)
            alert('Foto de perfil alterada com sucesso!')
          })
        }).catch(err => console.error(err))
    }

    this.onEmiterClosePopUp()
    
  }

  addCategory(category: string){
    this.categorysCurrent.push(category) 
  }

  deleteCategory(i: number){
    const excluir = confirm('deseja realmente deletar essa categoria?')
    if(excluir){
      this.categorysCurrent.splice(i,1)
    }
    
    
  }
}
