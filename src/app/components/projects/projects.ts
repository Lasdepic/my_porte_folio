import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type Project = Readonly<{
  name: string;
  tagline: string;
  detailsUrl: string;
  scopeLabel: string;
}>;

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  readonly projects: readonly Project[] = [
    {
      name: 'FreshTrack',
      tagline: 'Découvre la présentation du projet (dépôt privé).',
      detailsUrl: '/projets/freshtrack',
      scopeLabel: 'Projet',
    },
    {
      name: 'Nabu',
      tagline: 'Présentation de l’application (frontend + backend).',
      detailsUrl: '/projets/nabu',
      scopeLabel: 'Full-stack',
    },
  ];
}
