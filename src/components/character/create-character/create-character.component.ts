import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Subject, takeUntil } from 'rxjs';
import { CharacterService } from '../../../services/character.service';
import { EditBuffsComponent } from "../edit-buffs/edit-buffs.component";
import { EditTraitsComponent } from "../edit-traits/edit-traits.component";


@Component({
  selector: 'pirates-dred-create-character',
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    EditBuffsComponent,
    EditTraitsComponent
],
  templateUrl: './create-character.component.html',
  styleUrl: './create-character.component.scss'
})
export class CreateCharacterComponent implements OnInit, OnDestroy{
  private _fb: FormBuilder = inject(FormBuilder);
  private _characterService: CharacterService = inject(CharacterService);
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  form: FormGroup = this._fb.group({
    name: this._fb.control<string>('', { validators: [Validators.required], nonNullable: true }),
    type: this._fb.control<string>('', { validators: [Validators.required], nonNullable: true }),
    traits: this._fb.group({
      intelligence: this._fb.control<number>(1, { validators: [Validators.required, Validators.min(1)], nonNullable: true }),
      will: this._fb.control<number>(1, { validators: [Validators.required, Validators.min(1)], nonNullable: true }),
      strength: this._fb.control<number>(1, { validators: [Validators.required, Validators.min(1)], nonNullable: true }),
      agility: this._fb.control<number>(1, { validators: [Validators.required, Validators.min(1)], nonNullable: true }),
      charisma: this._fb.control<number>(1, { validators: [Validators.required, Validators.min(1)], nonNullable: true }),
    })
  });
  startingBuffPoints = 0;
  remainingCharacterPoints = 0;
  remainingBuffsPoints = 0;
  selectedType$: WritableSignal<string> = signal<string>('');
  buffs: Record<string, number> = {};

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get type(): FormControl {
    return this.form.get('type') as FormControl;
  }

  get traits(): FormGroup {
    return this.form.get('traits') as FormGroup;
  }

  ngOnInit(): void {
    this.type.valueChanges.pipe(takeUntil(this._destroy$)).subscribe({
      next: value => {
        this.selectedType$.set(value);
        this.buffs = {};
        this.setBuffs(value);
        console.log(this.buffs);
      },
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  balanceCharacterPoints(): void {
    this._characterService.balanceCharacterPoints(this.traits);
  }

  resetCharcterPoints(): void {
    this._characterService.resetCharcterPoints(this.traits);
  }

  calculatePointsRemaining(): number {
    return this._characterService.calculatePointsRemaining(this.traits);
  }


  setBuffs(type: string): void {
    this._characterService.setBuffs(type);
    this.buffs = this._characterService.buffs;
  }

  submitCharacter(): void {
    console.log('Character submitted');
  }
}
