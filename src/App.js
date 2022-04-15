import "./styles.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { ThemeContext, themes } from "./themeContext";
import ToggleDark from "./toggleDark";
import React from "react";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="App m-5">
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <ToggleDark
            ToggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
      </ThemeContext.Consumer>
      <TodoInput />
      <TodoList />
    </div>
  );
}
