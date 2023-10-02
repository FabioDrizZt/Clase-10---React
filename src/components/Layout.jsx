import { useContext } from "react";
import ThemeContext from "../context";

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      <h1>Layout</h1>
      <hr />
      {children}
      <hr />
      <p>Footer del Layout</p>
    </div>
  );
}
