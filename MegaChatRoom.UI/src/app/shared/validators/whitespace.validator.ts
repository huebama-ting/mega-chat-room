import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export function whitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isOnlyWhitespace = control.value.trim().length === 0;

    return isOnlyWhitespace ? { isonlywhitespace: true } : null;
  };
}
