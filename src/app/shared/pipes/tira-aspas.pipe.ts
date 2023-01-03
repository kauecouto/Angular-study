import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tiraAspas'
})
export class TiraAspasPipe implements PipeTransform {

  transform(value: string): unknown { 
    return value.slice( 1, -1 );
  }

}
