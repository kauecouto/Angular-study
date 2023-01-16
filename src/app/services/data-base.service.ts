import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})
export class DataBaseService {
  registros!: AngularFireList<any>

  constructor( private db: AngularFireDatabase) {
  }

  insert(name: string, data: any){
    let key
    this.db.list(name).push(data)
    .then((result)=> {
      key = result.key
    })
    return key
  }

  update(name: string, key : string, data: any){
    this.db.list(name).update(key, data)
    .then( result =>{
      console.log('Alterado!!', name)
      console.log(result)
    })
    .catch(err =>{
      console.error(err)
    })
  }

  getAll(name: string){
    return this.db.list(name).snapshotChanges().pipe(
      map(changes => changes.map(c =>
        ({ key: c.payload.key, ...c.payload.toJSON()})
        ))
    )
  }


  delete(name: string, key: string){
    this.db.object(`${name}/${key}`).remove()
  }
}
