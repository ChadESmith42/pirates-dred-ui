import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBuffsComponent } from './edit-buffs.component';

describe('EditBuffsComponent', () => {
  let component: EditBuffsComponent;
  let fixture: ComponentFixture<EditBuffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBuffsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBuffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
