import css from './NoBoard.module.css'

const NoBoard = () => {
  return (
    <div>
        <p>Please, select a board=D</p>
      <svg className={css.icon}>
        <use href="/icons.svg#icon-man-with-notebook-svgrepo-com"></use>
      </svg>
    </div>
  )
}

export default NoBoard
