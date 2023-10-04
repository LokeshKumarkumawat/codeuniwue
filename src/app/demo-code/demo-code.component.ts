import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-code',
  templateUrl: './demo-code.component.html',
  styleUrls: ['./demo-code.component.css']
})
export class DemoCodeComponent  {
  tagForm: FormGroup;
  tags: string[] = [];

  constructor(private fb: FormBuilder) {
    this.tagForm = this.fb.group({
      newTag: ['', Validators.required],
    });
  }

  addTag() {
    const newTag = this.tagForm.get('newTag')?.value?.trim();
    if (newTag !== undefined && newTag !== null && newTag !== '') {
      this.tags.push(newTag);
      this.tagForm.get('newTag')?.reset(); // Reset the input field
    }
  }

  removeTag(tag: string) {
    const index = this.tags.indexOf(tag);
    if (index !== -1) {
      this.tags.splice(index, 1);
    }
  }

}
