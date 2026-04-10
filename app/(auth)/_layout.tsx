import { Stack } from 'expo-router';
import AuthLayout from './components/AuthLayout';

export default function Layout() {
  return (
    <AuthLayout>
      <Stack.Screen name="Login" />
      <Stack.Screen name="Signup" />
    </AuthLayout>
  );
}