import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={css.logoWrap}>
      <span className={css.logoText}>Welcome to TaskMan</span>
      <svg className={css.icon}>
        <use href="/icons.svg#icon-man-writing-a-letter-svgrepo-com"></use>
      </svg>
    </div>
  );
};

export default Logo;
