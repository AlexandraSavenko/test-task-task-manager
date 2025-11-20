import { ClipLoader } from 'react-spinners'
import css from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.loading}><ClipLoader /></div>
    </div>
    
  )
}

export default Loader