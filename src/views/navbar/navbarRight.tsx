import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import c from '../../locales/constants'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { logout } from "../../app/appSlice"
import { changeLanguage } from "../../app/extrareducers/appExtraReducers"

import IAppState from '../../domains/core/interfaces/IAppState'
import ILanguage from '../../domains/core/interfaces/components/language/ILanguage';

const NavbarRight = () => {
  const appState = useAppSelector(state => state.app) as IAppState
  const dispatch = useAppDispatch(); 
  const location = useLocation();
  const { t } = useTranslation()

  const languages:Array<ILanguage> = [
    { lang: 'en', description: "English" },
    { lang: 'es', description: "Español" },
  ].filter(x => x.lang != appState.config.lang)


  const handlerLanguageLink = async (lang: string) => {
    dispatch(changeLanguage(lang))
  }

  const handlerLogout = async(e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    dispatch(logout())    
  }

  const AuthLink = () => {
    if (location.pathname == '/login') {
      return (<></>)
    }

    if (appState.config.auth.authenticated) {
      return (
        <li>
          <Link to="/" data-uk-icon="icon: sign-out" 
            onClick={handlerLogout} data-uk-tooltip={t(c.logout)}>
            {""}
          </Link>
        </li>
      )
    } else {
      return (
        <li>
          <Link to="/login" data-uk-icon="icon: sign-in"
            data-uk-tooltip={t(c.sign_up)}>
            {""}
          </Link>
        </li>
      )
    }
  }

  const LanguageLink = () => {
    return (
      <li>
        <a href="#" data-uk-tooltip={t(c.change_language)}>
          <span data-uk-icon="icon: world"></span>
          { appState.config.lang }
        </a>
        <div className="uk-navbar-dropdown uk-padding-small uk-width-small">
          <ul className="uk-nav uk-navbar-dropdown-nav">
            { 
              languages.map(item => {
                return (
                  <li key={item.lang}>
                    <a href="#" 
                      onClick={() => handlerLanguageLink(item.lang)} >
                        { item.description }
                    </a>
                  </li>
                )
              }) 
            }
          </ul>
        </div>
      </li>
    )
  }

  const UserInfo = () => {
    if (appState.config.auth.authenticated) {
      return (
        <li>
          <a href="#" className="preventUpperCase" data-uk-tooltip={ `title:${t(c.your_account)}; pos: bottom-right` }>{ appState.config.auth.user?.nickname }</a>
          <div className="uk-navbar-dropdown uk-padding-small">
            <ul className="uk-nav uk-navbar-dropdown-nav">
              <li>
                <Link to="/config">
                  <span data-uk-icon="icon: settings" />{ t(c.configuration)}
                </Link>
              </li>
            </ul>
          </div>
        </li>
      )
    } else {
      return (<></>)
    }
  }

  return (
    <div className="uk-navbar-right">
      <ul className="uk-navbar-nav">
        <UserInfo />
        <LanguageLink />
        <AuthLink />
      </ul>
    </div>
  )
}

export default NavbarRight 
