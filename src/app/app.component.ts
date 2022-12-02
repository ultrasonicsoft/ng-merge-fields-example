import { Component } from '@angular/core';

interface TemplateText{
  text: string;
  fields: Map<string,string>;
  template: string;
}

/*
template: abc<<discount>>xyz<<rate>>end.
text = abc10xyz20end.
text = abc10xyz20end-UDPATED.
template = abc<<discount>>xyz<<rate>>end.

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-merge-fields';

  fieldName: string = 'Discount';
  fieldKey!: string;
  fieldValue!: string;

  mergeFields = new Map<string, string>();

  content: string = '';
  contentWithValues!: string;

  constructor() { }

  add(): void {
    console.debug('🔥 name', this.fieldName);
    this.fieldKey = `<<${this.fieldName}>>`;
    this.content += this.fieldKey;
    console.debug('🔥 fields', this.mergeFields);
    // this.fieldValue = '';
    // this.fieldName = '';

  }

  updateValue(): void {
    const value = this.mergeFields.get(this.fieldKey);
    this.mergeFields.set(this.fieldKey, this.fieldValue);
    console.debug('🔥 updated map', this.mergeFields);
  }
}
