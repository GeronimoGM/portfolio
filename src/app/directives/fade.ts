import { Directive, ElementRef, inject, input, OnInit } from '@angular/core';

type FadeDirection = 'up' | 'left' | 'right';

@Directive({
  selector: '[appFade]',
})
export class Fade implements OnInit {
  private readonly el = inject(ElementRef<HTMLElement>);

  readonly direction = input<FadeDirection>('up');

  ngOnInit(): void {
    const target =
      Array.from(this.el.nativeElement.children).find((c) => c instanceof HTMLElement) ||
      this.el.nativeElement;

    const translateMap = {
      up: 'translate-y-6',
      left: 'translate-x-6',
      right: '-translate-x-6',
    };

    target.classList.add(
      'opacity-0',
      translateMap[this.direction()],
      'transition-all',
      'duration-1000',
      'ease-out',
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.classList.remove('opacity-0', translateMap[this.direction()]);
          target.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(target);
  }
}
