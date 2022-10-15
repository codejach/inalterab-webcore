import {UseFormRegister} from "react-hook-form";

export default interface IInput<T> {
  name: string,
  placeholder: string,
  register: UseFormRegister<T>,
  required: boolean,
  type: string,
}
