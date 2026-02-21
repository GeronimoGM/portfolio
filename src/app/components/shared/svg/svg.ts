import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Size } from '../../../types/size';

@Component({
  selector: 'app-svg',
  imports: [],
  template: `
    <svg [class]="sizeClass()">
      <use [attr.href]="href()" />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Svg {
  readonly name = input.required<string>();
  readonly size = input<Size>('sm');

  protected readonly href = computed(() => `assets/svg/sprites.svg#${this.name()}`);
  protected readonly sizeClass = computed(() => {
    switch (this.size()) {
      case 'xs':
        return 'size-4';
      case 'sm':
        return 'size-8';
      case 'md':
        return 'size-12';
      case 'lg':
        return 'size-16';
      case 'xl':
        return 'size-20';
    }
  });
}
