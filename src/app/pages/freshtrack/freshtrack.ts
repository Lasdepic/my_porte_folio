import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type TechItem = Readonly<{
  name: string;
  iconSrc: string;
}>;

type TechCategory = Readonly<{
  title: string;
  items: readonly TechItem[];
}>;

@Component({
  selector: 'app-freshtrack-page',
  imports: [RouterLink],
  templateUrl: './freshtrack.html',
  styleUrl: './freshtrack.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FreshtrackPage {
  readonly repoUrl = 'https://github.com/Lasdepic/freshtrack';

  readonly features = [
    'Suivi des produits alimentaires et de leurs dates de péremption',
    'Alertes automatiques avant expiration',
    'Gestion des stocks par catégorie',
    'Authentification utilisateur via Firebase',
    'Synchronisation en temps réel avec Firestore',
    'Compatible Android et Web',
  ];

  readonly stack: readonly TechCategory[] = [
    {
      title: 'Mobile',
      items: [
        { name: 'Flutter', iconSrc: 'assets/icons/flutter.svg' },
        { name: 'Dart', iconSrc: 'assets/icons/dart.svg' },
      ],
    },
    {
      title: 'Backend',
      items: [{ name: 'Firebase', iconSrc: 'assets/icons/firebase.svg' }],
    },
    {
      title: 'Base de données',
      items: [{ name: 'Firestore', iconSrc: 'assets/icons/firebase.svg' }],
    },
  ];
}
