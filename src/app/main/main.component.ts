import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  description= 'Micro-entreprise Lilloise Mes petits fanions à vu le jour en 2020.Nous créons des fanions en tissus pour la décoration de la chambre de votre enfant ou pour des évenements.'
  description2='Nos modèles sont crées, imaginés et cousu en france à la main. Vous pouvez entièrement les personnaliser à votre goût grâce à notre simulateur.'
  
  constructor() { }

  ngOnInit(): void {
  }


  @Input()PhotoStatut!:string;

  images=[
    {path:"../../assets/img/chambre1.jpg", status:"image1"},
    {path:"../../assets/img/chambre2.jpg", status:"image2"},
    {path:"../../assets/img/chambre3.jpg", status:"image3"},
    {path:"../../assets/img/chambre4.jpg", status:"image4"},
    {path:"../../assets/img/sohan.jpg", status:"image5"},
    {path:"../../assets/img/jules.jpg", status:"image6"},
    {path:"../../assets/img/aiden2.jpg", status:"image7"},
    {path:"../../assets/img/mariage.jpg", status:"image8"},
    {path:"../../assets/img/fleuri.jpg", status:"image9"}
]



}
