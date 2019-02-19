//Mise en ^place du pipe dont je me sers pour filtrer l'affichage des formations tapees par le user
import { Pipe, PipeTransform } from '@angular/core';
import { DataModel } from './models/data.model';


@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(data: DataModel[], searchToken: string) {


        if (searchToken == null || data == null) {
            searchToken = "";
            return ""
        }

        searchToken = searchToken.toLowerCase();
        console.log(searchToken);

        let doto=data.filter(data => data.name.toLowerCase().indexOf(searchToken) > -1);
        data.filter(data => data.type.toLowerCase().indexOf(searchToken) > -1);

        console.log(doto);
        return doto;
    }
    
}