import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fanion-edit',
  templateUrl: './fanion-edit.component.html',
  styleUrls: ['./fanion-edit.component.css']
})
export class FanionEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  biais:string;
  fanion1:string;
  fanion2:string;
  fanion3:string;
  fanion4:string;
  fanion5:string;
  fanion6:string;
  flex:string;
  brode:string;
  prenom:string;

  tissusList=[
    {src:"../../assets/img/1.jpg", id:"1", name:"rose fleurs"},
    {src:"../../assets/img/2.jpg", id:"2", name:"rose perroquets"},
    {src:"../../assets/img/3.jpg", id:"3", name:"rose poudré"},
    {src:"../../assets/img/4.jpg", id:"4", name:"rose orangé"},
    {src:"../../assets/img/5.jpg", id:"5", name:"rouge géométrique"},
    {src:"../../assets/img/6.jpg", id:"6", name:"fleurs bleu rouge"},
    {src:"../../assets/img/7.jpg", id:"7", name:"fleurs bleu"},
    {src:"../../assets/img/8.jpg", id:"8", name:" ancres bleu marine"},
    {src:"../../assets/img/9.jpg", id:"9", name:"bleu cyan"},
    {src:"../../assets/img/10.jpg", id:"10", name:"motifs géométriques bleu"},
    {src:"../../assets/img/11.jpg", id:"11", name:"bleu ciel pâle"},
    {src:"../../assets/img/12.jpg", id:"12", name:"fleurs bleu ciel"},
    {src:"../../assets/img/13.jpg", id:"13", name:"gris chiné"},
    {src:"../../assets/img/14.jpg", id:"14", name:" beige à pois blanc"},
    {src:"../../assets/img/15.jpg", id:"15", name:"gris motifs géométriques"},
    {src:"../../assets/img/16.jpg", id:"16", name:"ours polaires"},
    {src:"../../assets/img/17.jpg", id:"17", name:"beige"},
    {src:"../../assets/img/18.jpg", id:"18", name:" moutarde étoiles"},
    {src:"../../assets/img/19.jpg", id:"19", name:"gris étoiles blanches"},
    {src:"../../assets/img/20.jpg", id:"20", name:" moutarde motifs éventail"}
    ]
  
  biaisList=[
    {name:"Gris",id:"1"},
    {name:"Bleu",id:"2"},
    {name:"beige",id:"3"}
  ]

  onSubmit(form: NgForm){
    const biais =form.value['biais'];
    const fanion1 =form.value['fanion1'];
    const fanion2= form.value['fanion2'];
  
  }
}
