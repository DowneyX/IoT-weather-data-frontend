import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagraphComponent } from './datagraph.component';

describe('DatagraphComponent', () => {
  let component: DatagraphComponent;
  let fixture: ComponentFixture<DatagraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatagraphComponent]
    });
    fixture = TestBed.createComponent(DatagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
