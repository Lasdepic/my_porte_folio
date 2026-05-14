import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly fullName = 'Clément Jordan';
  readonly roleLabel = 'Développeur full-stack';

  readonly mailHref = 'mailto:clementjordan34@gmail.com';
  readonly githubUrl = 'https://github.com/Lasdepic';
  readonly linkedinUrl = 'https://www.linkedin.com/in/jordan-bellin-95ab7022b/';
}
