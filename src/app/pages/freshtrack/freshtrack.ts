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

type Screenshot = Readonly<{
  src: string;
  alt: string;
  caption: string;
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

  readonly screenshots: readonly Screenshot[] = [
    {
      src: 'assets/images/freshTrack/connexion.jpg',
      alt: "Écran de connexion de l'application FreshTrack",
      caption: 'Connexion',
    },
    {
      src: 'assets/images/freshTrack/produit.jpg',
      alt: "Liste des produits dans l'application FreshTrack",
      caption: 'Produits',
    },
    {
      src: 'assets/images/freshTrack/scan.webp',
      alt: "Scanner dans l'application FreshTrack",
      caption: 'Scanner',
    },
  ];

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
