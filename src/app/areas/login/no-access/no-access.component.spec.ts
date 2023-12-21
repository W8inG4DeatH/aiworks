import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAccessComponent } from 'src/app/areas/login/no-access/no-access.component';

describe('NoAccessComponent', () => {
  let component: NoAccessComponent;
  let fixture: ComponentFixture<NoAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});