import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubPage } from './github';

describe('GithubPage', () => {
  let component: GithubPage;
  let fixture: ComponentFixture<GithubPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GithubPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
