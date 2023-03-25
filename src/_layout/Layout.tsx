import './layout.css';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { trans } from '../domain/translations';
import { useTitleContextProvider } from './_TitleContextProvider';
import { ErrorBoundary } from './ErrorBoundary';
import TopBarProgressByLocation from './TopBarProgresByLocation';
import { ToastContainer } from 'react-toastify';
import { selectElement } from '../_shared/helpers';
export function Layout() {
  const { title, component } = useTitleContextProvider();
  useEffect(() => {
    if (title) {
      const element = selectElement('h2.title') as unknown as HTMLTitleElement;
      element.style.setProperty('--title-width', `-${title.length}%`);
    }
  }, [title]);

  return (
    <>
      <ErrorBoundary>
        <aside className="form-background"></aside>
        <TopBarProgressByLocation />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />{' '}
        <header>
          <h1>{trans('layout.title')}</h1>
        </header>
        <article className="content">
          <h2 className="title">
            {title}
            {component}
          </h2>
          <Outlet />
        </article>
      </ErrorBoundary>
    </>
  );
}
