import ICatalog from "../common/ICatalog";
import IAction from "./IAction";

export default interface IAccess extends ICatalog {
  actions: IAction[],
}
