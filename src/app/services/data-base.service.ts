import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})
export class DataBaseService {

  constructor( private db: AngularFireDatabase) {}

  insert( name: string, data: any){
    this.db.list(name).push(data)
    .then((result)=> {
      console.log(result.key)
    })
  }

  update(name: string, data: any , key : string){
    this.db.list(name).update(key, data)
    .then( result =>{
      console.log('Alterado!!')
      console.log(result)
    })
    .catch(err =>{
      console.error(err)
    })
  }

  getAll(name: string){
    return this.db.list('contato')
    .snapshotChanges()
    .pipe(
        map(changes => {
              return changes.map(c => ({ key: c.payload.key, ...c.payload.val }));
          })
    )
   
    
      
  }

  delete(name: string, key: string){
    this.db.object(`${name}/${key}`).remove()
  }
}
