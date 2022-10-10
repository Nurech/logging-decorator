import { Component, OnInit } from '@angular/core';
import { Log } from './decorators/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string = 'Alexander Smith';
  grade: number = 82;
  age: number = 42;
  students: any[] = [{name: 'Hannah', age: 12}, {name: 'Alex', age: 13}];
  result: string = this.age + '1';
  y: number = 123e5;
  table = [
    {
      'id': 1,
      'first_name': 'Gregoor',
      'last_name': 'Olrenshaw'
    }, {
      'id': 2,
      'first_name': 'Marilin',
      'last_name': 'Agass'
    }, {
      'id': 3,
      'first_name': 'Quintilla',
      'last_name': 'Causier'
    }, {
      'id': 4,
      'first_name': 'Godart',
      'last_name': 'Lorentzen'
    }
  ];
  itsNull: any = null;
  nestedArr: number[][] = [[3, 4]];
  map: Map<number, string> = new Map().set(1, 'value');
  z: number = 123e-5;
  arr: any[] = [1, 'hello'];
  func: Function = function testFn() {return;};
  obj: Object = {
    'cars': [
      {
        'brand': 'Tata',
        'name': 'Hexa',
        'variant': 'Diesel',
        'type': '3',
        'id': 1,
        'commentId': 2
      },
      {
        'brand': 'Tata',
        'name': 'Nano',
        'variant': 'Diesel',
        'type': '1',
        'id': 2,
        'commentId': 1
      }
    ],
    'comments': [
      {
        'id': 1,
        'userComments': 'Good Car'
      },
      {
        'id': 2,
        'userComments': 'Bad Car'
      }
    ]
  };

  ngOnInit() {
    this.babyStepsFn(this.name, this.age);
    this.noticeTheNameFn(this.obj);
    this.onlyInputsFn(this.students);
    this.onlyOutputsFn(this.grade, this.y);
    this.complexObjFn(this.obj);
    this.typeNoOutputBecauseNoReturnFn(this.name);
    this.willPrintInProdFn(this.arr);
    this.whatHappensWhenFnIsParamFn(this.func(null));
    this.typeWarnFn(this.itsNull);
    this.typeNoStampFn(this.nestedArr);
  }

  @Log()
  babyStepsFn(name: string, age: number) {
    return `${name} ${age}`;
  }

  @Log({type: 'log'})
  noticeTheNameFn(pramName: any) {
    return pramName;
  }

  @Log({type: 'log', inputs: true})
  onlyInputsFn(students: any[]) {
    return students;
  }

  @Log({type: 'log', outputs: true})
  onlyOutputsFn(grade: number, y: number) {
    return grade + y;
  }

  @Log({type: 'log'})
  complexObjFn(obj: Object) {
    return obj;
  }

  @Log()
  typeNoOutputBecauseNoReturnFn(name: string) {
    return;
  }

  @Log({printInProd: true})
  willPrintInProdFn(arr: any[]) {
    return arr;
  }

  @Log({printInProd: true})
  whatHappensWhenFnIsParamFn(func1: any) {
    return func1;
  }

  @Log({type: 'warn'})
  typeWarnFn(itsNull: any) {
    return itsNull;
  }

  @Log({timeStamp: false})
  typeNoStampFn(nestedArr: number[][]) {
    return nestedArr;
  }

}
