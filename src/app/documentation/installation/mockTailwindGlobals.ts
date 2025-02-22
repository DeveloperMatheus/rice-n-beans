export const CODE_TAILWIND_VIEW = `@import 'tailwindcss';

@custom-variant dark (&:is([class~='dark'] *));

/* CSS vars */
:root {
  --primary: 240 6% 10%;
  --secondary: 240 5% 96%;
  --success: 142 72% 29%;
  --error: 0 84% 60%;
  --border: 240 6% 90%;
  --muted: 220 9% 46%;

  --primary-contrast: 240 6% 90%;
  --secondary-contrast: 0 0% 19%;
  --success-contrast: 240 6% 100%;
  --error-contrast: 240 6% 100%;

  --scaffold: 0 0% 100%;
  --scaffold-contrast: 0 0% 19%;
  --ring: 240 10% 4%;

  --checkmark-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236b7280' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  --arrow-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
}

.dark {
  --primary: 240 5% 84%;
  --secondary: 240 4% 16%;
  --success: 143 64% 24%;
  --error: 0 63% 31%;
  --border: 240 4% 16%;
  --muted: 218 11% 65%;

  --primary-contrast: 0 0% 19%;
  --secondary-contrast: 0 0% 85%;
  --success-contrast: 0 0% 85%;
  --error-contrast: 0 0% 85%;

  --scaffold: 240 6% 10%;
  --scaffold-contrast: 240 6% 90%;
  --ring: 240 5% 84%;
}

@theme {
  --content-checkmark-icon: var(--checkmark-icon);

  --color-primary: hsl(var(--primary));
  --color-secondary: hsl(var(--secondary));
  --color-success: hsl(var(--success));
  --color-error: hsl(var(--error));
  --color-scaffold: hsl(var(--scaffold));
  --color-muted: hsl(var(--muted));

  --color-primary-contrast: hsl(var(--primary-contrast));
  --color-secondary-contrast: hsl(var(--secondary-contrast));
  --color-success-contrast: hsl(var(--success-contrast));
  --color-error-contrast: hsl(var(--error-contrast));
  --color-scaffold-contrast: hsl(var(--scaffold-contrast));

  --border-color-default: hsl(var(--border));
  --ring-color-default: hsl(var(--ring));
  --background-image-arrow-icon: var(--arrow-icon);
  --animate-fade-in: fade-in 0.2s ease-in-out;
  --animate-modal: modal 0.2s ease-in-out;

  @keyframes fade-in {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes modal {
    0% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
}
`
