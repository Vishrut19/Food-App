import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  //Check if Online
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => setOnlineStatus(false));
    window.addEventListener("online", () => setOnlineStatus(true));
  }, []);
  //   Boolean  Value
  return onlineStatus;
};

export default useOnlineStatus;
