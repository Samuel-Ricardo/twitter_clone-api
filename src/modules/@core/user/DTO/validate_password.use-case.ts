export class IValidateUserPasswordDTO {
  password: {
    expected: string;
    given: string;
  };
}
