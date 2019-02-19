import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DataModel } from './models/data.model';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let datas = DataModel;
		return { datas };
	}
}