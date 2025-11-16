import type React from 'react'
import css from './Layout.module.css'
import Header from '../Header/Header';
import { Suspense } from 'react';

interface Props {
    children: React.ReactNode;
}
const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className={css.layoutWrap}>
      <Header/>
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  )
}

export default Layout
