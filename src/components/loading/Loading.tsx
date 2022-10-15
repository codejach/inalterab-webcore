// Component
const Loading = () => {
  return (
    <div className="uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
      <div className="uk-flex uk-flex-column">
        <div uk-spinner="ratio: 3"></div>
        <div className="uk-text-center">
          <p>Inalterab</p>
        </div>
      </div>
    </div>
  )
}

export default Loading
