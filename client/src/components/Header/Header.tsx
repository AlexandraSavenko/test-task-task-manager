import SelectBoard from '../selectBoard/SelectBoard'
import css from './Header.module.css'

const Header = () => {
  return (
    <div className={css.headerWrap}>
      Header
      <SelectBoard/>
    </div>
  )
}

export default Header
