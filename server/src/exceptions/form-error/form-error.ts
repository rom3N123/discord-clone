import { HttpStatus } from '@nestjs/common';
import { FormFieldError } from './form-error.types';

export default class FormError extends Error {
  public status = HttpStatus.BAD_REQUEST;
  public type = 'FormError';
  public errors: FormFieldError[];

  constructor(errors: FormFieldError[]) {
    super('FormError');

    this.errors = errors;

    Object.setPrototypeOf(this, FormError.prototype);
  }
}
