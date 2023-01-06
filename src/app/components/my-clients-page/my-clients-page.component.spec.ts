import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClientsPageComponent } from './my-clients-page.component';

describe('MyClientsPageComponent', () => {
  let component: MyClientsPageComponent;
  let fixture: ComponentFixture<MyClientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyClientsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
