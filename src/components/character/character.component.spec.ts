import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponent } from './character.component';
import { CharacterService } from '../../services/character.service';

const mockCharacterService = {
  getCharacter: jasmine.createSpy('getCharacter'),
}

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterComponent],
      providers: [
        { provide: CharacterService, useValue: mockCharacterService },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
