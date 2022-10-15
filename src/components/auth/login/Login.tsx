// Libraries
import { Link, Navigate } from "react-router-dom"
import { joiResolver } from "@hookform/resolvers/joi"
import { SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"

// services
import { useAppSelector } from "../../../app/hooks"
import { useLoginMutation } from "../../../services/coreApi"

// Utilities
import c from "../../../locales/constants";

// Interfaces
import IAppState from "../../../domains/core/interfaces/IAppState"
import IInput from "../../../domains/core/interfaces/components/input/IInput"
import ILoginRequest from "../../../domains/core/interfaces/request/ILoginRequest"

// Components
import Notify from "../../notify/Notify"
import Input from "../../input/Input"
import LoginValidator from "./LoginValidator"

// Component
const Login = () => {
  const appState = useAppSelector(state => state.app) as IAppState 
  const { t } = useTranslation()
  const [login, { isLoading }] = useLoginMutation();
  const { handleSubmit, register, formState: { errors } } 
    = useForm<ILoginRequest>({ resolver: joiResolver(LoginValidator) })

  const onSubmit:SubmitHandler<ILoginRequest> = async data => {
    if (!errors.hasOwnProperty()) await login(data)
  }
  
  if (appState.config.auth.authenticated) {
    return (<Navigate replace to="/" />)
  }

  const accountParams: IInput<ILoginRequest> = {
    name: 'account',
    placeholder: t(c.user),
    required: true,
    register: register,
    type: 'text'
  }
  const passwordParams: IInput<ILoginRequest> = {
    name: 'password',
    placeholder: t(c.password),
    required: true,
    register: register,
    type: 'password'
  }

  return (
    <div className="uk-section uk-section-secondar uk-flex uk-flex-middle" data-uk-height-viewport="offset-top: true">
    	<div className="uk-width-1-1">
    		<div className="uk-container">
    			<div className="uk-grid-margin uk-grid uk-grid-stack" data-uk-grid>
    				<div className="uk-width-1-1@m">
    					<div className="uk-margin uk-width-medium uk-margin-auto">
    						<form onSubmit={ handleSubmit(onSubmit) }>
    							<div className="uk-margin-small">
    								<div className="uk-inline uk-width-1-1">
    									<span className="uk-form-icon" data-uk-icon="icon: mail"></span>
                      <Input<ILoginRequest> { ...accountParams } />
    								</div>
                    <p className="uk-margin-small uk-text-small uk-text-warning">{ errors.account?.message }</p>
    							</div>
    							<div className="uk-margin-small">
    								<div className="uk-inline uk-width-1-1">
    									<span className="uk-form-icon" data-uk-icon="icon: lock"></span>
                      <Input<ILoginRequest> { ...passwordParams } />
    								</div>
                    <p className="uk-margin-small uk-text-small uk-text-warning">{ errors.password?.message }</p>
    							</div>
                  <Notify message={ appState.ui.login.message } isLoading={ isLoading } />
    							<div className="uk-margin-small">
    								<button 
                      type="submit"
                      className="uk-button uk-button-small uk-width-1-1"
                      disabled={ isLoading }
                      >{ t(c.sign_up) }</button>
    							</div>
    							<div className="uk-text-small uk-text-center">
    								{ t(c.not_registered) } <Link to="/register">{ t(c.create_an_account) }</Link>
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

export default Login
