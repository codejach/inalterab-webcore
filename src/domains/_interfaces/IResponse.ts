export default interface IResponse<T> {
  code: number
  correlation: string,
  message: string,
  result: T,
  success: boolean,
}
