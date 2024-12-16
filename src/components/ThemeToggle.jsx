import React from 'react';
import { useTheme } from './ThemeProvider';
import { themes } from '../themes';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex space-x-2">
      {Object.keys(themes).map((themeName) => (
        <button
          key={themeName}
          onClick={() => toggleTheme(themeName)}
          className={`px-4 py-2 rounded ${
            theme === themeName
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
        </button>
      ))}
    </div>
  );
};