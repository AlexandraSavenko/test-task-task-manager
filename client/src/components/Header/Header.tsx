import { useAppDispatch } from '../../hooks/redux'
import { setModalOpen } from '../../redux/modal/slice'
import Button from '../Button/Button'
import SelectBoard from '../selectBoard/SelectBoard'
import css from './Header.module.css'

const Header = () => {
  const dispatch = useAppDispatch()
  const handleCreateBoard = () => {
    dispatch(setModalOpen("createBoard"))
  }
  return (
    <div className={css.headerWrap}>
      Header
      <SelectBoard/>
<Button onClick={handleCreateBoard} >Create Board</Button>
    </div>
  )
}

export default Header
