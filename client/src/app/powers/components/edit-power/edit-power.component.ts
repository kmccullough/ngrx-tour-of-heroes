import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Power } from '@core/models/power';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-power',
  templateUrl: './edit-power.component.html',
  styleUrls: ['./edit-power.component.scss']
})
export class EditPowerComponent implements OnInit, OnChanges {

  @Input() power: Power;
  @Output() update = new EventEmitter<Power>();
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.power && this.power) {
      this.form.patchValue(this.power);
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: [
        this.power && this.power.name || '',
        Validators.required
      ]
    });
  }

  submit () {
    this.update.emit({ id: this.power.id, ...this.form.value });
    this.router.navigate(['/powers'])
  }
}
