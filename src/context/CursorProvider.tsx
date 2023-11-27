"use client";

import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

export const CURSOR_TYPE_MAP = {
  DEFAULT: "default",
  TEXT: "text",
  LINK: "link",
  SKILLS: "skills",
} as const;

export type CursorType = typeof CURSOR_TYPE_MAP[keyof typeof CURSOR_TYPE_MAP];

interface ContextProps {
  cursorVariant: CursorType;

  setToDefault: () => void;
  setToText: () => void;
  setToLink: () => void;
  setToSkills: () => void;
}

interface CursorProviderProps {
  children: ReactNode;
}

const _noop = async () => {
  throw new Error("Not loaded");
};

const Context = createContext<ContextProps>({
  cursorVariant: "default",

  setToDefault: _noop,
  setToText: _noop,
  setToLink: _noop,
  setToSkills: _noop,
});

export const CursorProvider: FC<CursorProviderProps> = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorType>("default");

  const setToDefault = () => setCursorVariant("default");

  const setToText = () => setCursorVariant("text");

  const setToLink = () => setCursorVariant("link");

  const setToSkills = () => setCursorVariant("skills");

  const value = useMemo(
    () => ({
      cursorVariant,

      setToDefault,
      setToText,
      setToLink,
      setToSkills,
    }),
    [cursorVariant]
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
