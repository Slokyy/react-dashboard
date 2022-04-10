import React, { useState, useEffect, useContext } from "react";
const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const [pathname, setPathname] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(true);

  const [loggedUser, setLoggedUser] = useState([]);
  const [data, setData] = useState([]);
  const [addUserSlide, setAddUserSlide] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);

  const fetchUsers = (url) => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          setIsLoading(false);
          throw Error("OK: Bad response", res.status);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.log("Error message: ", err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (isLogedIn && localStorage.getItem("user")) {
      let currentUser = JSON.parse(localStorage.getItem("user"));
      fetch(`http://localhost:8000/users/${currentUser.id}`)
        .then((res) => {
          if (!res.ok) {
            throw Error("OK: Bad Fetch Logged User", res.status);
          }
          return res.json();
        })
        .then((data) => {
          setLoggedUser(data);
        })
        .catch((err) => {
          console.log("Error fetching logged user: ", err);
        });
    }
  }, [pathname]);

  const handleLocationPath = () => {
    setPathname(window.location.pathname.replace(/^\/|\/$/g, ""));
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
        pathname,
        setPathname,
        handleLocationPath,
        fetchUsers,
        addUserSlide,
        setAddUserSlide,
        refetch,
        setRefetch,
        loggedUser,
        setLoggedUser,
        isLogedIn,
        setIsLogedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
// https://stackoverflow.com/questions/66747556/react-js-error-uselocation-may-be-used-only-in-the-context-of-a-router-com
const useGlobalState = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalState };
