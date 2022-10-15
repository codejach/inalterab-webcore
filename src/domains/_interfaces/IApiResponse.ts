import {SerializedError} from "@reduxjs/toolkit"
import {FetchBaseQueryError} from "@reduxjs/toolkit/dist/query"
import IResult from "./IResponse"

export default interface IApiResponse {
  data: IResponse,
  error: FetchBaseQueryError | SerializedError
}
