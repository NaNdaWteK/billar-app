/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useContext, useState } from "react";

const TitleContext = createContext<{ title: string; changeTitle: (title: string) => {} }>({
	title: "",
	changeTitle(title: string) {
		return title;
	},
});

export function TitleContextProvider({ children }: { children: React.ReactElement }) {
	const [title, setTitle] = useState<string>("");
	const changeTitle = (title: string) => {
		setTitle(title);

		return title;
	};

	return <TitleContext.Provider value={{ title, changeTitle }}>{children}</TitleContext.Provider>;
}

export const useTitleContextProvider = () => useContext(TitleContext);
