import INotify from "../../domains/core/interfaces/components/notify/INotify"

// Component
const Notify = ({ message, isLoading }:INotify) => {
  const style = { color: 'black' }
  if (!isLoading && message && message.length > 0) {
    return (
      <div>
        <div className="uk-alert-danger uk-margin-small uk-text-small" data-uk-alert>
          <a className="uk-alert-close" style={style} data-uk-close></a>
          <p>{ message }</p>
        </div>
      </div>
    )
  } else {
    return (<></>)
  }
}

export default Notify 
