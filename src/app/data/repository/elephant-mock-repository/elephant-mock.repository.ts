import { Injectable } from '@angular/core';

import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ElephantModel } from '../../../core/domain/elephant.model';
import { ElephantRepository } from '../../../core/repositories/elephant.repository';
import { ElephantMockEntity } from './elephant-mock-entity';
import { ElephantMockRepositoryMapper } from './elephant-mock-repository-mapper';

@Injectable({
  providedIn: 'root'
})
export class ElephantMockRepository extends ElephantRepository {

  private mapper = new ElephantMockRepositoryMapper();

  elephants: ElephantMockEntity[] = [
    {
      'id': 1,
      'name': 'Mr. MockBig',
      'family': 'father',
      'birthday': new Date()
    },
    {
      'id': 2,
      'name': 'Mrs. MockTootoot',
      'family': 'mother',
      'birthday': new Date()
    },
    {
      'id': 3,
      'name': 'LittleMockToot',
      'family': 'baby',
      'birthday': new Date()
    }
  ];

  constructor() {
    super();
  }

  getElephantById(id: number): Observable<ElephantModel> {
    return of(this.elephants)
      .pipe(
        map((elephants: ElephantMockEntity[]) => elephants.filter(elephant => elephant.id === id)[0]),
        map(this.mapper.mapFrom)
      )
  }

  getAllElephants(): Observable<ElephantModel> {
    return from(this.elephants)
      .pipe(map(this.mapper.mapFrom));
  }
}
