import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-information',
  imports: [],
  templateUrl: './information.html',
  styleUrl: './information.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class Information {
  readonly city = input<string>('Montpellier');
  readonly phone = input<string>('');
  readonly mail = input<string>('');
  readonly githubUrl = input<string>('');
  readonly linkedinUrl = input<string>('');

  readonly phoneHref = computed(() => {
    const raw = this.phone().trim();
    if (!raw) return '';

    const sanitized = raw.replace(/[^\d+]/g, '');
    return sanitized ? `tel:${sanitized}` : '';
  });

  readonly mailHref = computed(() => {
    const raw = this.mail().trim();
    if (!raw) return '';

    return raw.toLowerCase().startsWith('mailto:') ? raw : `mailto:${raw}`;
  });

  readonly githubDisplay = computed(() => formatDisplayUrl(this.githubUrl()));
  readonly linkedinDisplay = computed(() => formatDisplayUrl(this.linkedinUrl()));
}

function formatDisplayUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return '';

  return trimmed
    .replace(/^https?:\/\//i, '')
    .replace(/^www\./i, '')
    .replace(/\/$/, '');
}
