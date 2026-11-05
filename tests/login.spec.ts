import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Prueba de inicio de sesión exitoso', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // 1. Navegar
  await loginPage.goto();
  
  // *Verificación:* Confirmar que estamos en la página de login
  await expect(page).toHaveURL(/practice-test-login/);

  // 2. Ejecutar login
  await loginPage.login('student', 'Password123');

  // 3. Validar resultado exitoso
  // *Verificación:* Comprobar redirección y visibilidad del mensaje de éxito
  await expect(page).toHaveURL(/logged-in-successfully/);
  await expect(page.getByRole('heading', { name: /Logged In Successfully/i })).toBeVisible();
});
