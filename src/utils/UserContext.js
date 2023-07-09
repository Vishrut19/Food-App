// What is context? Context is like useState for the entire application.
import { createContext } from "react";

const UserContext = createContext({
  // THis is the default value
  user: {
    email: "dummy@gmail.com",
    name: "Dummy Name",
  },
});

export default UserContext;
