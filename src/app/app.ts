import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Svg } from './components/shared/svg/svg';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Svg],
  template: `
    <header
      class="sticky top-0 z-50 backdrop-blur border-b border-border bg-bg-primary/80 flex items-center justify-between px-responsive py-4"
    >
      <a href="/">
        <app-svg name="logo" />
      </a>
      <nav
        class="items-center justify-between gap-4 flex text-sm [&>a]:text-text-secondary [&>a]:hover:text-accent [&>a]:transition-colors [&>a]:duration-300 [&>a]:border-b [&>a]:border-transparent [&>a]:hover:border-accent translate-y-0.5"
      >
        <a href="#">Sobre mí</a>
        <a href="#">Experiencia</a>
        <a href="#">Educación</a>
        <a href="#">Contacto</a>
      </nav>
    </header>

    <main class="flex-1 px-responsive py-8">
      <router-outlet />
    </main>

    <footer class="border-t border-border px-responsive py-6">
      <p class="text-text-secondary">To do...</p>
    </footer>
  `,
  host: {
    class:
      'min-h-screen flex flex-col text-text-primary transition-colors duration-300 container max-w-6xl mx-auto',
  },
})
export class App {}
