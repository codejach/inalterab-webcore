// Libraries
import { Link, Navigate } from "react-router-dom"
import { joiResolver } from "@hookform/resolvers/joi"
import { SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"

// services
import { useAppSelector } from "../../../app/hooks"
import { useRegisterMutation } from "../../../services/coreApi"

// Utilities
import c from "../../../locales/constants";

// Interfaces
import IAppState from "../../../domains/core/interfaces/IAppState"
import IInput from "../../../domains/core/interfaces/components/input/IInput"
import IRegisterRequest from "../../../domains/core/interfaces/request/IRegisterRequest"

// Components
import Notify from "../../notify/Notify"
import Input from "../../input/Input"
import RegisterValidator from "./RegisterValidator"

// Component
const Register = () => {
  const appState = useAppSelector(state => state.app) as IAppState
  const { t } = useTranslation()
  const [registerUser, { isLoading }] = useRegisterMutation();
  const {
    handleSubmit, 
    register, 
    formState: { errors }
  } = useForm<IRegisterRequest>({ resolver: joiResolver(RegisterValidator) })

  const onSubmit:SubmitHandler<IRegisterRequest> = async data => {
    if (!errors.hasOwnProperty()) await registerUser(data).unwrap()
  }
  
  if (appState.config.auth.authenticated) {
    return (<Navigate replace to="/" />)
  }

  const accountParams: IInput<IRegisterRequest> = {
    name: 'account',
    placeholder: t(c.user),
    required: true,
    register: register,
    type: 'text'
  }
  const passwordParams: IInput<IRegisterRequest> = {
    name: 'password',
    placeholder: t(c.password),
    required: true,
    register: register,
    type: 'password'
  }
  const passwordConfirmParams: IInput<IRegisterRequest> = {
    name: 'passwordConfirm',
    placeholder: t(c.password_confirm),
    required: true,
    register: register,
    type: 'password'
  }

  return (
    <div className="uk-section uk-flex uk-flex-middle" data-uk-height-viewport="offset-top: true">
    	<div className="uk-width-1-1">
    		<div className="uk-container">
    			<div className="uk-grid-margin uk-grid uk-grid-stack" data-uk-grid>
    				<div className="uk-width-1-1@m">
    					<div className="uk-margin uk-width-medium uk-margin-auto">
    						<form onSubmit={ handleSubmit(onSubmit) }>
    							<div className="uk-margin-small">
    								<div className="uk-inline uk-width-1-1">
    									<span className="uk-form-icon" data-uk-icon="icon: mail"></span>
                      <Input<IRegisterRequest> { ...accountParams } />
    								</div>
                    <p className="uk-margin-small uk-text-small uk-text-warning">
                      { errors.account?.message }
                    </p>
    							</div>
    							<div className="uk-margin-small">
    								<div className="uk-inline uk-width-1-1">
    									<span className="uk-form-icon" data-uk-icon="icon: lock"></span>
                      <Input<IRegisterRequest> { ...passwordParams } />
    								</div>
                    <p className="uk-margin-small uk-text-small uk-text-warning">
                      { errors.password?.message }
                    </p>
    							</div>
    							<div className="uk-margin-small">
    								<div className="uk-inline uk-width-1-1">
    									<span className="uk-form-icon" data-uk-icon="icon: lock"></span>
                      <Input<IRegisterRequest> { ...passwordConfirmParams } />
    								</div>
                    <p className="uk-margin-small uk-text-small uk-text-warning">
                      { errors.passwordConfirm?.message }
                    </p>
    							</div>
                  <Notify message={ appState.ui.register.message } isLoading={ isLoading } />
    							<div className="uk-margin-small">
    								<button 
                      type="submit"
                      className="uk-button uk-button-small uk-width-1-1"
                      disabled={ isLoading }
                      >{ t(c.sign_in) }</button>
    							</div>
    							<div className="uk-text-small uk-text-center">
    								{ t(c.already_registered) } <Link to="/login">{ t(c.sign_up) }</Link>
    							</div>
    						</form>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
  )  
}

export default Register 
