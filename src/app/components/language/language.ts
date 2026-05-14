import { ChangeDetectionStrategy, Component } from '@angular/core';

type TechItem = Readonly<{
  name: string;
  iconSrc: string;
}>;

type TechCategory = Readonly<{
  title: string;
  items: readonly TechItem[];
}>;

@Component({
  selector: 'app-language',
  imports: [],
  templateUrl: './language.html',
  styleUrl: './language.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Language {
  readonly categories: readonly TechCategory[] = [
    {
      title: 'Frontend',
      items: [
        { name: 'HTML', iconSrc: 'assets/icons/html5.svg' },
        { name: 'CSS', iconSrc: 'assets/icons/css.svg' },
        { name: 'Bootstrap', iconSrc: 'assets/icons/bootstrap.svg' },
        { name: 'Tailwind CSS', iconSrc: 'assets/icons/tailwindcss.svg' },
        { name: 'JavaScript', iconSrc: 'assets/icons/javascript.svg' },
        { name: 'Angular', iconSrc: 'assets/icons/angular.svg' },
        { name: 'Next.js', iconSrc: 'assets/icons/nextdotjs.svg' },
      ],
    },
    {
      title: 'Backend',
      items: [
        { name: 'PHP', iconSrc: 'assets/icons/php.svg' },
        { name: 'Symfony', iconSrc: 'assets/icons/symfony.svg' },
        { name: 'Firebase', iconSrc: 'assets/icons/firebase.svg' },
        { name: 'Express.js', iconSrc: 'assets/icons/express.svg' },
      ],
    },
    {
      title: 'Base de données',
      items: [
        { name: 'Firebase', iconSrc: 'assets/icons/firebase.svg' },
        { name: 'Supabase', iconSrc: 'assets/icons/supabase.svg' },
        { name: 'MongoDB', iconSrc: 'assets/icons/mongodb.svg' },
        { name: 'phpMyAdmin', iconSrc: 'assets/icons/phpmyadmin.svg' },
      ],
    },
    {
      title: 'Mobile',
      items: [{ name: 'Flutter', iconSrc: 'assets/icons/flutter.svg' }],
    },
  ];
}
