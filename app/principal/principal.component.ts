import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public postEspecial: string;
  public postSecundario: string;
  constructor() { }

  ngOnInit() {
    this.postEspecial = "schoolofnetevictor";
    this.postSecundario = "angularetypescript";
  }

}
