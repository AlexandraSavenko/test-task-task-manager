import { createPortal } from "react-dom"

const NewModal = () => {
  return createPortal(<p>MODAL</p>, document.body)
}

export default NewModal
