import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

type Repo = {
  name: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

@Component({
  selector: 'app-github-stats',
  templateUrl: './github-stats.html',
  styleUrl: './github-stats.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubStats implements OnInit {
  readonly username = 'Lasdepic';
  readonly profileUrl = 'https://github.com/Lasdepic';

  repos = signal<Repo[]>([]);
  totalRepos = signal(0);
  totalStars = signal(0);
  languages = signal<{ name: string; count: number; percent: number; color: string }[]>([]);
  loading = signal(true);

  private readonly langColors: Record<string, string> = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    PHP: '#777bb4',
    Dart: '#00b4ab',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572A5',
    Other: '#8b8b8b',
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Repo[]>(`https://api.github.com/users/${this.username}/repos?per_page=100`)
      .subscribe((repos) => {
        this.repos.set(repos);
        this.totalRepos.set(repos.length);
        this.totalStars.set(repos.reduce((acc, r) => acc + r.stargazers_count, 0));
        this.computeLanguages(repos);
        this.loading.set(false);
      });
  }

  private computeLanguages(repos: Repo[]) {
    const counts: Record<string, number> = {};
    repos.forEach((r) => {
      const lang = r.language ?? 'Other';
      counts[lang] = (counts[lang] ?? 0) + 1;
    });
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, count]) => ({
        name,
        count,
        percent: Math.round((count / total) * 100),
        color: this.langColors[name] ?? this.langColors['Other'],
      }));
    this.languages.set(sorted);
  }
}
