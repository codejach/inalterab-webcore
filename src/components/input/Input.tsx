// Libraries
import { Path } from "react-hook-form";

// Components
import IInput from "../../domains/interfaces/IInput";

// Component
function Input1<T>({ name, placeholder, required, type, register }: IInput<T>) {
  return (
    <input
      autoComplete="off"
      className="uk-input uk-form-small" 
      placeholder={placeholder}
      type={type}
      {...register(name as Path<T>, { required: required })}
    />
  )
}

export default Input1
