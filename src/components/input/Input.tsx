// Libraries
import { Path } from "react-hook-form";
import IInput from "../../domains/core/interfaces/components/input/IInput";

// Component
function Input1<T>({
  maxLength,
  name,
  placeholder,
  required,
  type,
  register,
}: IInput<T>) {
  return (
    <input
      autoComplete="off"
      className="uk-input"
      maxLength={maxLength}
      placeholder={placeholder}
      type={type}
      {...register(name as Path<T>, { required: required })}
    />
  );
}

export default Input1;
