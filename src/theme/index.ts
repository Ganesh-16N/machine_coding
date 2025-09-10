export { darkTheme } from './colors';
export { commonStyles } from './styles';

// Re-export colors for convenience
export const colors = {
  background: {
    primary: '#0f172a',
    secondary: '#1e293b',
    tertiary: '#334155',
    card: '#1e293b',
    modal: '#0f172a',
  },
  text: {
    primary: '#f8fafc',
    secondary: '#cbd5e1',
    tertiary: '#94a3b8',
    muted: '#64748b',
    inverse: '#0f172a',
  },
  accent: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#06b6d4',
  },
  border: {
    primary: '#334155',
    secondary: '#475569',
    focus: '#3b82f6',
  },
  button: {
    primary: {
      background: '#3b82f6',
      text: '#ffffff',
      border: '#3b82f6',
    },
    secondary: {
      background: '#334155',
      text: '#f8fafc',
      border: '#334155',
    },
    success: {
      background: '#10b981',
      text: '#ffffff',
      border: '#10b981',
    },
    danger: {
      background: '#ef4444',
      text: '#ffffff',
      border: '#ef4444',
    },
    outline: {
      background: 'transparent',
      text: '#3b82f6',
      border: '#3b82f6',
    },
  },
  input: {
    background: '#1e293b',
    border: '#334155',
    text: '#f8fafc',
    placeholder: '#64748b',
    focus: '#3b82f6',
  },
  difficulty: {
    1: '#10b981',  // Green - Basic
    2: '#f59e0b',  // Orange - Intermediate
    3: '#3b82f6',  // Blue - Advanced
    4: '#ef4444',  // Red - Interview-Level
    5: '#8b5cf6',  // Purple - Expert-Level
  },
  shadow: {
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.2)',
    dark: 'rgba(0, 0, 0, 0.3)',
  },
  navigation: {
    header: '#1e293b',
    tabBar: '#0f172a',
    active: '#3b82f6',
    inactive: '#64748b',
  },
};
