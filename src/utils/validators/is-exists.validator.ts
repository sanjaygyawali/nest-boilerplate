import {
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';

export class IsExist implements ValidatorConstraintInterface {
  validate(
    value: string,
    validationArguments: ValidationArguments,
  ): boolean | Promise<boolean> {
    const repository = validationArguments.constraints[0];
    const pathToProperty = validationArguments.constraints[1];

    return true;
  }
}
