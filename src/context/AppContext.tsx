import useFetch from "@/helpers/useFetch";
import React, { createContext, ReactNode, useContext } from "react";

interface PostContextProps {
  posts: any;
  loading: boolean;
  error: string | null;
}

const AppContext = createContext<PostContextProps | undefined>(undefined);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const url = "https://dummyjson.com/posts";
  const { data, error, loading } = useFetch({ url });

  return (
    <AppContext.Provider value={{ posts: data, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};

export { AppContextProvider, AppContext, useAppContext };
