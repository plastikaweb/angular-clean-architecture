import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ElephantRepository } from './core/repositories/elephant.repository';
import { ElephantMockRepository } from './data/repository/elephant-mock-repository/elephant-mock.repository';
import { ElephantCardListComponent } from './presentation/elephant-card-list/elephant-card-list.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ElephantCardListComponent
      ],
      providers: [
        {provide: ElephantRepository, useClass: ElephantMockRepository}
      ]
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
