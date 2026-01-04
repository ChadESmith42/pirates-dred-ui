import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'pirates-dred-edit-traits',
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-traits.component.html',
  styleUrl: './edit-traits.component.scss'
})
export class EditTraitsComponent {
  @Input() traits: FormGroup = new FormGroup({});
  private _characterService: CharacterService = inject(CharacterService);

  get intelligence(): FormControl {
    return this.traits.get('intelligence') as FormControl;
  }

  get will(): FormControl {
    return this.traits.get('will') as FormControl;
  }

  get strength(): FormControl {
    return this.traits.get('strength') as FormControl;
  }

  get agility(): FormControl {
    return this.traits.get('agility') as FormControl;
  }

  get charisma(): FormControl {
    return this.traits.get('charisma') as FormControl;
  }

  calculatePointsRemaining(): number {
    return this._characterService.calculatePointsRemaining(this.traits);
  }

  balanceCharacterPoints(): void {
    this._characterService.balanceCharacterPoints(this.traits);
  }

  resetCharacterPoints(): void {
    this._characterService.resetCharcterPoints(this.traits);
  }
}
