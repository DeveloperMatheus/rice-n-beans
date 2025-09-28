export const CODE_TAILWIND_VIEW = `@import 'tailwindcss';

@custom-variant dark (&:is([class~='dark'] *));

:root {
  --primary: oklch(0.21 0.0059 285.89);
  --secondary: oklch(0.96 0.0013 286.38);
  --success: oklch(0.52 0.1367 149.91);
  --error: oklch(0.63 0.2088 25.41);
  --border: oklch(0.92 0.004 286.32);
  --muted: oklch(0.55 0.0234 264.36);

  --primary-contrast: oklch(0.92 0.004 286.32);
  --secondary-contrast: oklch(0.31 0 0);
  --success-contrast: oklch(1 0 0);
  --error-contrast: oklch(1 0 0);

  --scaffold: oklch(1 0 0);
  --scaffold-contrast: oklch(0.31 0 0);
  --ring: oklch(0.14 0.0044 285.82);

  --checkmark-icon: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%236b7280' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  --arrow-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
}

.dark {
  --primary: oklch(0.87 0.0055 286.29);
  --secondary: oklch(0.27 0.0055 286.03);
  --success: oklch(0.44 0.1069 151.54);
  --error: oklch(0.4 0.1352 25.81);
  --border: oklch(0.27 0.0055 286.03);
  --muted: oklch(0.71 0.0205 262.98);

  --primary-contrast: oklch(0.31 0 0);
  --secondary-contrast: oklch(0.88 0 0);
  --success-contrast: oklch(0.88 0 0);
  --error-contrast: oklch(0.88 0 0);

  --scaffold: oklch(0.21 0.0059 285.89);
  --scaffold-contrast: oklch(0.92 0.004 286.32);
  --ring: oklch(0.87 0.0055 286.29);
}

@theme {
  --content-checkmark-icon: var(--checkmark-icon);

  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
  --color-success: var(--success);
  --color-error: var(--error);
  --color-scaffold: var(--scaffold);
  --color-muted: var(--muted);

  --color-primary-contrast: var(--primary-contrast);
  --color-secondary-contrast: var(--secondary-contrast);
  --color-success-contrast: var(--success-contrast);
  --color-error-contrast: var(--error-contrast);
  --color-scaffold-contrast: var(--scaffold-contrast);

  --border-color-default: var(--border);
  --ring-color-default: var(--ring);
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

/* custom scrollbar */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: oklch(0.85 0.03 220);
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: oklch(0.75 0.04 220);
}
`
