import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nabu-page',
  imports: [RouterLink],
  templateUrl: './nabu.html',
  styleUrl: './nabu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NabuPage {
  readonly frontendRepoUrl = 'https://github.com/Lasdepic/frontend_nabu';
  readonly backendRepoUrl = 'https://github.com/Lasdepic/backend_nabu';
}
