//Debut de mise en place du pipe qui devait servir
import { Pipe, PipeTransform } from '@angular/core';
import { DataModel } from './models/data.model';

@Pipe({name: 'formTypePipe'})
export class FormTypePipe implements PipeTransform {
  transform(datas: DataModel[], type: string[]): any[] {
    if (!type || type.length === 0) return type;
    return datas.filter(datas => type.includes(datas.type));
  }
}