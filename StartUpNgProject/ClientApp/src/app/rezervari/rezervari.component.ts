import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-rezervari",
  templateUrl: "./rezervari.component.html",
  styleUrls: ["./rezervari.component.scss"]
})
export class RezervariComponent implements OnInit {
  constructor() {}

  formGroup: FormGroup;
  fb: FormBuilder = new FormBuilder();

  ngOnInit() {
    this.formGroup = this.fb.group({
      date: [, Validators.required],
      name: [, Validators.required],
      phone: [, Validators.required],
      message: [, Validators.maxLength(1000)]
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
