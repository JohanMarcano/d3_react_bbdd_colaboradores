import { Alert as BootstrapAlert } from "react-bootstrap"

function Alert( {message} ) {
  return (
    <BootstrapAlert variant={message.variant}>
      {message.text}
    </BootstrapAlert>
  )
}

export default Alert