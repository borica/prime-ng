import { Component, OnInit } from '@angular/core';
import { ProfileBio } from 'src/app/model/ProfileBio';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
  faCoffee = faCoffee;
  bio: ProfileBio;

  constructor() {
    this.bio = new ProfileBio(
      'Gabriel Boriça',
      './assets/bio/3.jpg',
      './assets/bio/3,5.jpg',
      23,
      'Estudante de design gráfico que almeja algum dia atuar na área da ilustração digital. Creio que alem de saber utilizar as técnicas é imprescindível o uso da criatividade seja para projetos corporativos ou artísticos.',
      'instagramLink',
      'linkedInLink',
      'twitterLink'
    );
  }

  ngOnInit(): void {}
}
