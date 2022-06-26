import FormError from './form-error';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';

@Catch(FormError)
export default class FormErrorExceptionFilter implements ExceptionFilter {
  catch(exception: FormError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const status = exception.status;
    const errors = exception.errors;

    response.status(status).json({ statusCode: status, errors });
  }
}
