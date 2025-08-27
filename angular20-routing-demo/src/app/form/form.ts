import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {

  inputValue:string='';

  userName:string = '';

  nameControl = new FormControl(''); // reactive form control

  form:FormGroup;

  @ViewChild('viewChildInput') inputRef!: ElementRef;

  constructor(private fb:FormBuilder)
  {
    this.form = this.fb.group({
      name:['']
    });
  }

  logValue(value:string)
  {
    console.log('Template Ref Value:',value );
  }

  onInput(event: Event)
  {
    this.inputValue= (event.target as HTMLInputElement).value;
  }

  onSubmitEvent()
  {
    console.log('Event Binding Value:', this.inputValue);
  }

  onSubmitNgModel() {
    console.log('ngModel Value:', this.userName);
  }

  onSubmitFormControl()
  {
    console.log("FormControl Value:",this.nameControl.value);
  }

  onSubmitFormGroup() {
    console.log('From Group Value:', this.form.value.name);
  }

  onSubmitViewChild() {

    console.log('ViewChild Value:',this.inputRef.nativeElement.value);
  }

  onSubmitEnter(data: Event) {
    console.log('Enter Pressed Value:', (data.target as HTMLInputElement).value);
  }
}
