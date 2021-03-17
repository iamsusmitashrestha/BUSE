import React from "react";

export default function IndexPage({ history }) {
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/home");
    } else {
      history.push("/login");
    }
    // eslint-disable-next-line
  }, []);
  return <div></div>;
}
