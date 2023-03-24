import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss'],
})
export class RegisterStudentComponent implements OnInit {
  stdRegistration: FormGroup;
  submitted = false;
  lastSdt: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.stdRegistration = this.fb.group({
      name: new FormControl('', [Validators.required]),
      rollNum: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      currStd: new FormControl('', [Validators.required]),
      previousHistory: new FormArray([]),
    });
  }

  get registerFormControl() {
    return this.stdRegistration.controls;
  }

  get history(): any {
    return this.stdRegistration.controls['previousHistory'] as FormArray;
  }
  onChange(event) {
    const standard = event.target.value;
    const arr = <FormArray>this.stdRegistration.controls['previousHistory'];
    arr.controls = [];
    if (standard > 1) {
      for (let index = 1; index < standard; index++) {
        const historyFormGroup = this.fb.group({
          standard: [index, Validators.required],
          remark: ['', Validators.required],
          percentage: [
            '',
            [Validators.required, Validators.min(0), Validators.max(100)],
          ],
        });

        this.history.push(historyFormGroup);
      }
      this.lastSdt = true;
    } else {
      alert('Please Enter 2st to 12th Standard');
      this.lastSdt = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.stdRegistration.invalid) {
      return;
    }
    console.log(this.stdRegistration.value);
    this.router.navigate(['/details'], { state: this.stdRegistration.value });
    this.stdRegistration.reset();
    this.lastSdt = false;
    this.submitted = false;
  }
}
