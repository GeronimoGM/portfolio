import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Experience } from '../../../types/experience';
import { Svg } from '../../shared/svg/svg';

@Component({
  selector: 'app-experience-card',
  imports: [Svg],
  template: `
    @let experience = this.experience();
    <article class="flex flex-col justify-between gap-4 px-responsive py-6 lg:flex-row">
      <p class="text-text-secondary w-full sm:w-1/2">{{ experience.time }}</p>
      <div class="flex flex-col gap-4">
        <img
          class="self-center object-cover h-64 rounded"
          [src]="experience.imgSrc"
          [alt]="experience.imgAlt"
        />
        <header>
          @let href = experience.href;
          @if (href) {
            <a
              class="inline-flex items-center gap-1 text-accent hover:underline group"
              [href]="href"
              target="_blank"
            >
              <h3 class=" text-xl">{{ experience.company }}</h3>
              <app-svg
                class="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-150"
                name="link"
                size="xs"
              />
            </a>
          } @else {
            <h3 class="text-accent text-xl">{{ experience.company }}</h3>
          }
          <p class="text-text-primary text-lg">{{ experience.position }}</p>
        </header>
        <p class="text-text-secondary">{{ experience.summary }}</p>
        <footer class="flex flex-col gap-4 items-start">
          <span class="inline-flex flex-wrap items-center gap-2">
            <ng-content />
          </span>
        </footer>
      </div>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCard {
  readonly experience = input.required<Experience>();
}
