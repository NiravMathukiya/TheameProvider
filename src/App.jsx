import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';
import { useTheme } from './components/ThemeProvider';
import { themes } from './themes';

const ThemedComponent = () => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen p-8`}>
      <h1 className={`text-4xl font-bold mb-4`}>Themed Component</h1>
      <p className="mb-4">This component uses the current theme.</p>
      <p className={`text-${currentTheme.dis_icon}`}>This component uses the current theme.</p>
      <button className={`${currentTheme.primary} text-white px-4 py-2 rounded`}>
        Themed Button
      </button>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <ThemeToggle />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;

