import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-painel-notas',
  templateUrl: './painel-notas.component.html',
  styleUrls: ['./painel-notas.component.css']
})
export class PainelNotasComponent implements OnInit {
  responsive: boolean = false
  invalid: boolean = false
  color: string = '#FCD658'
  pages: string[] = ['Page1','Page2','Page3']
  pageActive!: string
  sizeCard: number = 0
  dataNotes!: any
  notes: any[] = []
  titleNote!: string
  descriptionNote!: string
  constructor(
    private route: Router,
    private dbFirebase: DataBaseService
    ) { }

  ngOnInit(): void {
    this.route.navigate(['inicio/notas'])
    this.pageActive = this.pages[0]
    console.log(this.pageActive)
    this.getAll()
    if(window.innerWidth <= 830){
      this.responsive = true
    }else{
      this.responsive = false
    }
  }

  getMedidas(id: string){
    console.log(document.querySelector(`.${id}`)?.getBoundingClientRect())
    
  }

  changePage(index: number){
    this.pageActive = this.pages[index]
    this.getAll(true)
  }

  increaseSizeCard(index: number,title: string, description: string, size: number, color: string){
    if(size == 400)
      return
    else
    this.notes[index] = {
        title: title,
        description: description,
        size: size + 50,
        color: color
    }
    this.setNote()
  }

  decreaseSizeCard(index: number,title: string, description: string, size: number, color: string){
    if(size == 200)
      return
    else
    this.notes[index] = {
        title: title,
        description: description,
        size: size - 50,
        color: color
    }
    this.setNote()
    
    
  }


  getAll(changepage?:boolean){
    this.dbFirebase.getAll(`usuários/${localStorage.getItem('key')}/Registros_Notes/${this.pageActive}`).subscribe(result => {
      this.dataNotes = result[0]
      if(this.dataNotes == undefined){
        this.criarBd()
      }
      if(this.notes.length == 0){
        for( let i = 0; i <= Object.keys(this.dataNotes.notes).length - 1; i++){
          this.notes.push(this.dataNotes.notes[i])
        } 
      }
      if(changepage){
        this.notes = []
        for( let i = 0; i <= Object.keys(this.dataNotes.notes).length - 1; i++){
          this.notes.push(this.dataNotes.notes[i])
        } 
      }
    })
  }

  editNote(index: number,title: string, description: string, size: number, color: string){
    this.notes[index] = {
      title: title,
      description: description,
      size: size,
      color: color
    }
    this.setNote()
  }

  setNote(){
    this.dbFirebase.update(`usuários/${localStorage.getItem('key')}/Registros_Notes/${this.pageActive}`,this.dataNotes.key, {
      notes: this.notes
    })
  }

  newNote(){
    const noteNew = {
      title: '',
      description: '',
      size: 200,
      color: ''
    }
    this.notes.push(noteNew) 
    this.setNote()
  }

  deleteNote(index: number){
    const excluir = confirm('Deseja realmente deletar essa nota?')
    if(excluir)
    this.notes.splice(index,1)
    this.setNote()
  }

  criarBd(){
    this.dbFirebase.insert(`usuários/${localStorage.getItem('key')}/Registros_Notes/${this.pageActive}`,{
      notes: [
        {
          title: '',
          description: '',
          size: 200,
          color: ''
        }
      ]
    })
  }
}
