"use client";

import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

export type CursorType = "default" | "text" | "link";

interface ContextProps {
  cursorVariant: CursorType;
  cursorText: string;

  setToDefault: () => void;
  setToText: () => void;
  setToLink: () => void;
}

interface CursorProviderProps {
  children: ReactNode;
}

const _noop = async () => {
  throw new Error("Not loaded");
};

const Context = createContext<ContextProps>({
  cursorVariant: "default",
  cursorText: "",

  setToDefault: _noop,
  setToText: _noop,
  setToLink: _noop,
});

export const CursorProvider: FC<CursorProviderProps> = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorType>("default");
  const [cursorText, setCursorText] = useState<string>("");

  const setToDefault = () => {
    setCursorVariant("default");
    setCursorText("");
  };

  const setToText = () => {
    setCursorVariant("text");
    setCursorText("");
  };

  const setToLink = () => {
    setCursorVariant("link");
    setCursorText("Click!");
  };

  const value = useMemo(
    () => ({
      cursorVariant,
      cursorText,

      setToDefault,
      setToText,
      setToLink,
    }),
    [cursorVariant, cursorText]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCursor = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useCursor() can only be used within CursorProvider");
  }

  return context;
};
