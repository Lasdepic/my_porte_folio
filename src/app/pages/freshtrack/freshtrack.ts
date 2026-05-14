import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-freshtrack-page',
  imports: [RouterLink],
  templateUrl: './freshtrack.html',
  styleUrl: './freshtrack.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FreshtrackPage {}
