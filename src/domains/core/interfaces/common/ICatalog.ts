import IIdentifier from "./IIdentifier";

export default interface ICatalog extends IIdentifier {
  name: string,
  description: string,
}
