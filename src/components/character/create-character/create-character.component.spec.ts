import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';
import { FormBuilder, FormControl, FormGroup, FormRecord } from '@angular/forms';
import { CharacterService } from '../../../services/character.service';

const mockCharacterService = {};


describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent],
      providers: [
        FormBuilder,
        { provide: CharacterService, useValue: mockCharacterService },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('resetBuffs()', () => {
    it('removes existing buffs', () => {
      (component.form.get('buffs') as FormGroup).addControl('test', new FormControl(''));

      component.resetBuffs(component.buffs);


      expect(component.buffs.controls).toEqual({});

    });
  });

});
