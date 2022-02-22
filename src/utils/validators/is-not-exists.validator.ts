import {
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';

export class IsNotExist implements ValidatorConstraintInterface {
  validate(
    value: any,
    validationArguments: ValidationArguments,
  ): boolean | Promise<boolean> {
    //   TODO validate if contains or not.
    return true;
  }
}
