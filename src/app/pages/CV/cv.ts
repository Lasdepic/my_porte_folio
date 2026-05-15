import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ContactItem = Readonly<{
  label: string;
  href?: string;
  external?: boolean;
}>;

type TechItem = Readonly<{
  name: string;
  iconSrc: string;
}>;

@Component({
  selector: 'app-cv-page',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvPage {
  readonly experiences = [
    {
      period: '2025 – 2026',
      company: 'BeWeb',
      title: 'Formation Développeur Web & Web Mobile',
      type: 'formation',
      tasks: [
        "NABU : Application de suivi d'archivage",
        'Adopte un Beweber : Application de matching RH avec intégration IA',
        'Trollais : Application de gestion de tâches',
        'FreshTrack : Application mobile Flutter de gestion de stocks alimentaires',
      ],
    },
    {
      period: '2023 – 2025',
      company: 'Nitro',
      title: 'Responsable Réception Pharmacie Polygone',
      type: 'work',
      tasks: [
        "Animation d'une équipe d'opérateurs logistique",
        'Organisation des plannings, répartition des tâches, recrutements',
        "Structuration et développement des pratiques et de l'organisation",
        'Contrôle de la qualité des marchandises, expédition et réception',
        'Contrôle des stocks',
      ],
    },
    {
      period: '2021 – 2023',
      company: 'Kawneer',
      title: 'Responsable Équipe Logistique',
      type: 'work',
      tasks: [
        "Animation d'une équipe d'opérateurs logistique",
        'Contrôle de la qualité des marchandises, de leur préparation, expédition et réception',
      ],
    },
    {
      period: '2017 – 2021',
      company: 'LIDL',
      title: 'Responsable Équipe Logistique',
      type: 'work',
      tasks: [
        "Animation d'une équipe d'opérateurs logistique",
        'Organisation des plannings, répartition des tâches, recrutements',
        "Structuration et développement des pratiques et de l'organisation",
        'Contrôle de la qualité des marchandises, de leur préparation, expédition et réception',
      ],
    },
  ];

  readonly skills: readonly TechItem[] = [
    { name: 'HTML', iconSrc: 'assets/icons/html5.svg' },
    { name: 'CSS', iconSrc: 'assets/icons/css.svg' },
    { name: 'Bootstrap', iconSrc: 'assets/icons/bootstrap.svg' },
    { name: 'Tailwind CSS', iconSrc: 'assets/icons/tailwindcss.svg' },
    { name: 'JavaScript', iconSrc: 'assets/icons/javascript.svg' },
    { name: 'React', iconSrc: 'assets/icons/react.svg' },
    { name: 'Angular', iconSrc: 'assets/icons/angular.svg' },
    { name: 'Next.js', iconSrc: 'assets/icons/nextdotjs.svg' },
    { name: 'PHP', iconSrc: 'assets/icons/php.svg' },
    { name: 'Symfony', iconSrc: 'assets/icons/symfony.svg' },
    { name: 'Firebase', iconSrc: 'assets/icons/firebase.svg' },
    { name: 'Express.js', iconSrc: 'assets/icons/express.svg' },
    { name: 'MySQL', iconSrc: 'assets/icons/MySQL.svg' },
    { name: 'MongoDB', iconSrc: 'assets/icons/mongodb.svg' },
    { name: 'Flutter', iconSrc: 'assets/icons/flutter.svg' },
    { name: 'Dart', iconSrc: 'assets/icons/dart.svg' },
    { name: 'Node.js', iconSrc: 'assets/icons/nodedotjs.svg' },
  ];

  readonly softSkills = [
    'Travail en équipe',
    'Gestion du temps',
    "Capacité d'analyse",
    'Anglais technique',
  ];

  readonly hobbies = [
    { icon: '🎮', label: 'Jeux vidéo FPS, RPG, Gestion' },
    { icon: '💻', label: 'Informatique' },
    { icon: '✈️', label: 'Voyage' },
  ];

  readonly contact: readonly ContactItem[] = [
    { label: '36 rue Buffon, 34070 Montpellier' },
    { label: 'clementjordan34@gmail.com', href: 'mailto:clementjordan34@gmail.com' },
    { label: '06.13.94.74.03', href: 'tel:+33613947403' },
    { label: 'github.com/Lasdepic', href: 'https://github.com/Lasdepic', external: true },
    { label: 'Permis B' },
  ];
}
