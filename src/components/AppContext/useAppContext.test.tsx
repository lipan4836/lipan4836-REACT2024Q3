import { renderHook } from '@testing-library/react';
import useAppContext from './useAppContext';
import { AppContextProps } from '../../types/AppContextProps';
import AppProvider from './AppProvider';

const mockContextValue: AppContextProps = {
  darkTheme: false,
  toggleTheme: jest.fn(),
};

describe('useAppContext', () => {
  test('returns context value when context is provided', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AppProvider>{children}</AppProvider>
    );

    const { result } = renderHook(() => useAppContext(), { wrapper });

    expect(result.current.darkTheme).toBe(mockContextValue.darkTheme);
    expect(typeof result.current.toggleTheme).toBe('function');
  });

  test('throws error when used outside of AppProvider', () => {
    const { result } = renderHook(() => {
      try {
        return useAppContext();
      } catch (error) {
        return error;
      }
    });

    if (result.current instanceof Error) {
      expect(result.current.message).toBe('useAppContext must be used within an AppProvider');
    } else {
      throw new Error('Expected error to be an instance of Error');
    }
  });
});
