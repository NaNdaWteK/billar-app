import React, { createContext, useContext, useState } from 'react';

const TitleContext = createContext<{
  title: string;
  changeTitle: (title: string, titleElement?: React.ReactElement) => unknown;
  component?: React.ReactElement;
    }>({
      title: '',
      changeTitle(title: string) {
        return title;
      },
      component: <></>,
    });

export function TitleContextProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [title, setTitle] = useState<string>('');
  const [component, setComponent] = useState<React.ReactElement>(<></>);
  const changeTitle = (title: string, titleActionElement = <></>) => {
    setTitle(title);
    setComponent(titleActionElement);

    return title;
  };

  return (
    <TitleContext.Provider value={{ title, changeTitle, component }}>
      {children}
    </TitleContext.Provider>
  );
}

export const useTitleContextProvider = () => useContext(TitleContext);
