import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from '../../components/shared/button/button';

@Component({
  selector: 'app-index-page',
  imports: [Button],
  template: `
    <section class="flex min-h-[calc(100dvh-130px)] justify-center items-center">
      <div class="flex flex-col max-w-2xl mx-auto gap-4">
        <div class="flex items-center gap-4 mb-2">
          <img
            class="size-24 object-cover rounded-full ring-2 ring-highlight"
            src="/assets/img/me.jpeg"
            alt="Foto de perfil de Gerónimo"
          />
          <div>
            <h1 i18n="@@title" class="text-4xl font-bold">
              Hola, soy <span class="text-highlight">Gerónimo</span>
            </h1>
            <h2 i18n="@@subtitle" class="text-xl text-text-secondary font-semibold">
              Full Stack Developer
            </h2>
          </div>
        </div>
        <div class="space-y-1">
          <p i18n="@@presentation.role" class="text-lg text-text-secondary">
            Especializado en arquitectura backend y experiencias frontend modernas.
          </p>
          <p i18n="@@presentation.experience" class="text-lg text-text-secondary">
            Fundador de <span class="text-text-primary">CompraAcá</span>. Diseño y construyo
            aplicaciones robustas con Spring y Angular, priorizando rendimiento, seguridad y
            experiencia de usuario.
          </p>
        </div>
        <div class="flex gap-2 items-center">
          <a
            i18n="@@button.contact"
            href="mailto:geronimogonzalezmartino@gmail.com"
            icon="mail"
            iconSize="xs"
            variant="contrast"
            app-button
            >Contactame</a
          >
          <a
            i18n="@@button.cvDownload"
            [href]="cvHref"
            download
            icon="download"
            iconSize="xs"
            variant="highlight"
            app-button
            >Descargar CV</a
          >
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexPage {
  protected readonly cvHref = $localize`:@@cv.href:/assets/pdf/cv-es.pdf`;
}
