import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './components/shared/button/button';
import { Header } from './components/shared/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Button],
  template: `
    <header app-header></header>

    <main class="flex-1 px-responsive py-8">
      <router-outlet />
    </main>

    <footer class="border-t border-border px-responsive py-6 flex justify-center items-center">
      <a
        aria-label="GitHub"
        app-button
        icon="social-github"
        variant="simple"
        href="https://github.com/GeronimoGM"
        target="_blank"
      ></a>
      <a
        aria-label="LinkedIn"
        app-button
        icon="linkedin"
        variant="simple"
        href="https://linkedin.com/in/geronimogm"
        target="_blank"
      ></a>
      <a
        aria-label="Instagram"
        app-button
        icon="instagram"
        variant="simple"
        href="https://instagram.com/gero.gonzalez.m"
        target="_blank"
      ></a>
    </footer>
  `,
  host: {
    class:
      'min-h-screen flex flex-col text-text-primary transition-colors duration-300 container max-w-6xl mx-auto',
  },
})
export class App {}
