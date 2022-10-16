import { joiResolver } from "@hookform/resolvers/joi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useUserUpdateMutation } from "../../services/coreApi";
import { useAppSelector } from "../../app/hooks";
import c from "../../locales/constants";

import IAppState from "../../domains/core/interfaces/IAppState";
import IInput from "../../domains/core/interfaces/components/input/IInput";
import IUserAccount from "../../domains/core/interfaces/common/IUserAccount";
import IUserAccountRequest from "../../domains/core/interfaces/request/IUserAccountRequest";

import Input from "../../components/input/Input";
import UserAccountValidator from "../../components/account/UserAccountValidator";

const UserAccount = () => {
  const { t } = useTranslation();
  const appState = useAppSelector((state) => state.app) as IAppState;

  const [update, { isLoading }] = useUserUpdateMutation();
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors },
  } = useForm<IUserAccountRequest>({
    resolver: joiResolver(UserAccountValidator),
  });

  const user = appState.config.auth.user!;
  const userAccountParams: IInput<IUserAccount> = {
    name: "nickname",
    placeholder: user.nickname || t(c.nickname),
    required: true,
    register: register,
    type: "text",
    maxLength: 20,
  };

  const onSubmit: SubmitHandler<IUserAccountRequest> = async (data) => {
    const payload = {
      _id: user.id!,
      nickname: data.nickname,
    };
    if (!errors.hasOwnProperty()) {
      await update(payload);
      resetField('nickname')
    }
  };

  return (
    <form
      className="uk-grid-small"
      onSubmit={handleSubmit(onSubmit)}
      data-uk-grid
    >
      <div className="uk-width-1-6 uk-margin-small">
        <div className="uk-text-small uk-text-bottom">{t(c.nickname)}</div>
      </div>
      <div className="uk-margin-small">
        <div className="uk-inline">
          <span className="uk-form-icon" data-uk-icon="icon: user"></span>
          <Input<IUserAccount> {...userAccountParams} />
        </div>
        <p className="uk-margin-small uk-text-small uk-text-warning">{ errors.nickname?.message }</p>
      </div>
      <div className="uk-margin-small">
        <button
          type="submit"
          className="uk-button uk-button-small uk-width-1-1"
          disabled={isLoading}
        >
          {t(c.save)}
        </button>
      </div>
    </form>
  );
};

export default UserAccount;
