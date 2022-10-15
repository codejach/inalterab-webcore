import IResponse from "../interfaces/IResponse"

class Response<T> implements IResponse<T> {
  readonly code
  readonly correlation
  readonly message
  readonly result
  readonly success

  constructor(
    result: T, 
    message: string = '', 
    success: boolean = false,
    correlation: string = '', 
    code: number = 400,
  ) {
    this.code = code
    this.correlation = correlation
    this.message = message
    this.result = result
    this.success = success
  }
}

export default Response
