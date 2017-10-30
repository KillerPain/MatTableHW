import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IUser } from 'app/app.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource: ExampleDataSource;
  data: IUser[] = [];

  constructor(private service: AppService) { }
  ngOnInit() {
    const exampleDatabase = new ExampleDatabase(this.service);
    this.dataSource = new ExampleDataSource(exampleDatabase);
  }
}


export class ExampleDatabase {  
  dataChange: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  get data(): IUser[] { return this.dataChange.value; }

  constructor(private service: AppService) {
    this.service.getPeople();
    this.service.results.subscribe((_data) => {
      this.addUser(_data);
    });
  }

  addUser(_data) {
    const copiedData = this.data.slice();
    copiedData.push(_data);
    this.dataChange.next(copiedData);
  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase) {
    super();
  }

  connect(): Observable<IUser[]> {    
    return this._exampleDatabase.dataChange;
  }

  disconnect() { }
}