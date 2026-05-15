import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type TechItem = Readonly<{
  name: string;
  iconSrc: string;
}>;

type SoftSkill = Readonly<{
  icon: string;
  label: string;
  description: string;
}>;

type TimelineItem = Readonly<{
  period: string;
  title: string;
  company: string;
  description: string;
  type: 'formation' | 'work';
}>;

@Component({
  selector: 'app-about-page',
  imports: [RouterLink],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {
  readonly timeline: readonly TimelineItem[] = [
    {
      period: '2025 – 2026',
      title: 'Développeur Web & Web Mobile',
      company: 'BeWeb',
      description:
        'Formation intensive Bac+2 en développement web et mobile. Réalisation de projets concrets en équipe : applications web, API REST, app mobile Flutter, intégration IA.',
      type: 'formation',
    },
    {
      period: '2023 – 2025',
      title: 'Responsable Réception',
      company: 'Nitro – Pharmacie Polygone',
      description:
        "Management d'équipe, organisation des plannings, contrôle qualité et gestion des stocks. Une expérience qui a renforcé ma rigueur et ma capacité à gérer des situations complexes.",
      type: 'work',
    },
    {
      period: '2021 – 2023',
      title: 'Responsable Équipe Logistique',
      company: 'Kawneer',
      description:
        "Animation d'équipe et contrôle qualité des marchandises dans un environnement industriel.",
      type: 'work',
    },
    {
      period: '2017 – 2021',
      title: 'Responsable Équipe Logistique',
      company: 'LIDL',
      description:
        '4 ans de management opérationnel : plannings, recrutements, structuration des pratiques et contrôle de la qualité dans un environnement exigeant.',
      type: 'work',
    },
  ];

  readonly softSkills: readonly SoftSkill[] = [
    {
      icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z',
      label: 'Travail en équipe',
      description: 'Habitué à coordonner des équipes et à collaborer sur des projets collectifs.',
    },
    {
      icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
      label: 'Gestion du temps',
      description: "Des années de management m'ont appris à prioriser et respecter les délais.",
    },
    {
      icon: 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
      label: "Capacité d'analyse",
      description: 'Résolution de problèmes, esprit logique et sens du détail.',
    },
    {
      icon: 'M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802',
      label: 'Anglais technique',
      description: 'Lecture de documentation, outils et communication en environnement pro.',
    },
    {
      icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
      label: 'Adaptabilité',
      description: "Reconversion réussie, passage du terrain au code — j'aime apprendre vite.",
    },
    {
      icon: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z',
      label: 'Curiosité',
      description: "Passionné d'informatique, toujours en veille sur les nouvelles technologies.",
    },
  ];

  readonly skills: readonly TechItem[] = [
    { name: 'HTML', iconSrc: 'assets/icons/html5.svg' },
    { name: 'CSS', iconSrc: 'assets/icons/css.svg' },
    { name: 'JavaScript', iconSrc: 'assets/icons/javascript.svg' },
    { name: 'Angular', iconSrc: 'assets/icons/angular.svg' },
    { name: 'PHP', iconSrc: 'assets/icons/php.svg' },
    { name: 'Symfony', iconSrc: 'assets/icons/symfony.svg' },
    { name: 'Flutter', iconSrc: 'assets/icons/flutter.svg' },
    { name: 'MySQL', iconSrc: 'assets/icons/MySQL.svg' },
    { name: 'Firebase', iconSrc: 'assets/icons/firebase.svg' },
  ];
}
