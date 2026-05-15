import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

type Repo = {
  name: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  description: string | null;
  html_url: string;
  topics: string[];
};

type GithubUser = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

@Component({
  selector: 'app-github-page',
  imports: [RouterLink],
  templateUrl: './github.html',
  styleUrl: './github.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubPage implements OnInit {
  readonly username = 'Lasdepic';

  user = signal<GithubUser | null>(null);
  repos = signal<Repo[]>([]);
  loading = signal(true);

  readonly langColors: Record<string, string> = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    PHP: '#777bb4',
    Dart: '#00b4ab',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572A5',
    Hack: '#878787',
    Other: '#8b8b8b',
  };

  readonly featuredRepos = ['freshtrack', 'frontend_nabu', 'backend_nabu', 'my_porte_folio'];

  featured = computed(() => this.repos().filter((r) => this.featuredRepos.includes(r.name)));

  otherRepos = computed(() =>
    this.repos()
      .filter((r) => !this.featuredRepos.includes(r.name))
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 8),
  );

  totalStars = computed(() => this.repos().reduce((acc, r) => acc + r.stargazers_count, 0));

  totalForks = computed(() => this.repos().reduce((acc, r) => acc + r.forks_count, 0));

  languages = computed(() => {
    const counts: Record<string, number> = {};
    this.repos().forEach((r) => {
      const lang = r.language ?? 'Other';
      counts[lang] = (counts[lang] ?? 0) + 1;
    });
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 7)
      .map(([name, count]) => ({
        name,
        count,
        percent: Math.round((count / total) * 100),
        color: this.langColors[name] ?? this.langColors['Other'],
      }));
  });

  yearsActive = computed(() => {
    const user = this.user();
    if (!user) return 0;
    return new Date().getFullYear() - new Date(user.created_at).getFullYear();
  });

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<GithubUser>(`https://api.github.com/users/${this.username}`)
      .subscribe((user) => this.user.set(user));

    this.http
      .get<Repo[]>(`https://api.github.com/users/${this.username}/repos?per_page=100&sort=updated`)
      .subscribe((repos) => {
        this.repos.set(repos);
        this.loading.set(false);
      });
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      month: 'short',
      year: 'numeric',
    });
  }

  getRepoLabel(name: string): string {
    const labels: Record<string, string> = {
      freshtrack: 'Application mobile Flutter de gestion de stocks alimentaires avec Firebase.',
      frontend_nabu:
        "Frontend JavaScript d'une app de suivi d'archivage avec authentification JWT.",
      backend_nabu: 'API REST PHP sécurisée par JWT pour la gestion de paquets et corpus.',
      my_porte_folio: 'Portfolio personnel développé avec Angular 19 et Tailwind CSS.',
    };
    return labels[name] ?? '';
  }
}
