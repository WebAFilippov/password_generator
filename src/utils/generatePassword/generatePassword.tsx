const uppercaseLetters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters: string = "abcdefghijklmnopqrstuvwxyz";
const numbers: string = "1234567890";
const symbols: string = "!@#$%^&*()-_+=;:,./?|`~[]{}";

interface ICheckbox {
  checkbox: {
    cb1: boolean;
    cb2: boolean;
    cb3: boolean;
    cb4: boolean;
  };
}

interface IProps extends ICheckbox {
  lenght: number;
}

const generatePassword = ({ lenght, checkbox }: IProps): string => {
  let combineCharacter: string = "";
  let password: string = "";

  if (checkbox.cb1) combineCharacter += uppercaseLetters;
  if (checkbox.cb2) combineCharacter += lowercaseLetters;
  if (checkbox.cb3) combineCharacter += numbers;
  if (checkbox.cb4) combineCharacter += symbols;

  for (let i: number = 0; i < lenght; i++) {
    password += combineCharacter.charAt(
      Math.random() * combineCharacter.length
    );
  }

  return password;
};

export default generatePassword;
