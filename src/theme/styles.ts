import { StyleSheet } from 'react-native';
import { darkTheme } from './colors';

export const commonStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: darkTheme.background.primary,
  },
  
  safeContainer: {
    flex: 1,
    backgroundColor: darkTheme.background.primary,
    paddingTop: 20,
  },
  
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkTheme.background.primary,
    padding: 20,
  },
  
  // Card styles
  card: {
    backgroundColor: darkTheme.background.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: darkTheme.border.primary,
    shadowColor: darkTheme.shadow.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  // Text styles
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: darkTheme.text.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: darkTheme.text.secondary,
    textAlign: 'center',
    marginBottom: 16,
  },
  
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: darkTheme.text.primary,
    marginBottom: 16,
  },
  
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    color: darkTheme.text.primary,
    marginBottom: 12,
  },
  
  bodyText: {
    fontSize: 16,
    color: darkTheme.text.secondary,
    lineHeight: 24,
  },
  
  caption: {
    fontSize: 14,
    color: darkTheme.text.tertiary,
    lineHeight: 20,
  },
  
  // Button styles
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  
  buttonPrimary: {
    backgroundColor: darkTheme.button.primary.background,
    borderWidth: 1,
    borderColor: darkTheme.button.primary.border,
  },
  
  buttonSecondary: {
    backgroundColor: darkTheme.button.secondary.background,
    borderWidth: 1,
    borderColor: darkTheme.button.secondary.border,
  },
  
  buttonSuccess: {
    backgroundColor: darkTheme.button.success.background,
    borderWidth: 1,
    borderColor: darkTheme.button.success.border,
  },
  
  buttonDanger: {
    backgroundColor: darkTheme.button.danger.background,
    borderWidth: 1,
    borderColor: darkTheme.button.danger.border,
  },
  
  buttonOutline: {
    backgroundColor: darkTheme.button.outline.background,
    borderWidth: 1,
    borderColor: darkTheme.button.outline.border,
  },
  
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: darkTheme.text.primary,
  },
  
  buttonTextPrimary: {
    color: darkTheme.button.primary.text,
  },
  
  buttonTextSecondary: {
    color: darkTheme.button.secondary.text,
  },
  
  buttonTextSuccess: {
    color: darkTheme.button.success.text,
  },
  
  buttonTextDanger: {
    color: darkTheme.button.danger.text,
  },
  
  buttonTextOutline: {
    color: darkTheme.button.outline.text,
  },
  
  // Input styles
  input: {
    backgroundColor: darkTheme.input.background,
    borderWidth: 1,
    borderColor: darkTheme.input.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: darkTheme.input.text,
    minHeight: 48,
  },
  
  inputFocused: {
    borderColor: darkTheme.input.focus,
    borderWidth: 2,
  },
  
  inputError: {
    borderColor: darkTheme.accent.error,
    borderWidth: 2,
  },
  
  // List styles
  listItem: {
    backgroundColor: darkTheme.background.card,
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: darkTheme.border.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  // Progress styles
  progressBar: {
    height: 8,
    backgroundColor: darkTheme.background.tertiary,
    borderRadius: 4,
    overflow: 'hidden',
  },
  
  progressFill: {
    height: '100%',
    backgroundColor: darkTheme.accent.success,
    borderRadius: 4,
  },
  
  // Badge styles
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  
  badgeSuccess: {
    backgroundColor: darkTheme.accent.success,
  },
  
  badgeWarning: {
    backgroundColor: darkTheme.accent.warning,
  },
  
  badgeError: {
    backgroundColor: darkTheme.accent.error,
  },
  
  badgeInfo: {
    backgroundColor: darkTheme.accent.info,
  },
  
  // Spacing utilities
  marginTop: {
    marginTop: 16,
  },
  
  marginBottom: {
    marginBottom: 16,
  },
  
  marginHorizontal: {
    marginHorizontal: 16,
  },
  
  padding: {
    padding: 16,
  },
  
  paddingHorizontal: {
    paddingHorizontal: 16,
  },
  
  paddingVertical: {
    paddingVertical: 16,
  },
  
  // Flex utilities
  row: {
    flexDirection: 'row',
  },
  
  column: {
    flexDirection: 'column',
  },
  
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  spaceBetween: {
    justifyContent: 'space-between',
  },
  
  spaceAround: {
    justifyContent: 'space-around',
  },
  
  // Shadow utilities
  shadowLight: {
    shadowColor: darkTheme.shadow.light,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  
  shadowMedium: {
    shadowColor: darkTheme.shadow.medium,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  
  shadowDark: {
    shadowColor: darkTheme.shadow.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
});
