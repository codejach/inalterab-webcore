import { Path, UseFormRegister } from "react-hook-form";

export default interface IFormRegister<T> {
  name: Path<T>,
  register: UseFormRegister<T>
}
