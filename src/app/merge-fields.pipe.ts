import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mergeFields',
  pure: false
})
export class MergeFieldsPipe implements PipeTransform {

  transform(value: string, template: string, mergeFields: Map<string, string>): unknown {
    console.debug('🔥 template', template);
    mergeFields.forEach((value, key) => {
      console.log(value, key); // 👉️ Tom name, Germany country, 30 age
      template = template.replaceAll(key, value);
    });
    console.debug('🔥 value in pipe', value);
    console.debug('🔥 args in pipe', mergeFields);
    return template;
  }

}
