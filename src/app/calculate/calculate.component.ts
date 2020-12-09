import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CalcModalComponent } from './calc-modal/calc-modal.component';

interface ILink {
  link: string;
  caption: string;
  info: string;
  CSSClass: string;
}

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  complexLinks: ILink[] = [
    {
      link: 'https://angular.io/',
      caption: 'Angular',
      info: 'One framework. Mobile & desktop.',
      CSSClass: 'icon-angular'
    },
    {
      link: 'https://facebook.com/',
      caption: 'Facebook',
      info:
        'Facebook helps you connect and share with the people in your life.',
      CSSClass: 'icon-facebook'
    },
    {
      link: 'https://google.com/',
      caption: 'Google',
      info: "Google search - I'm feeling lucky.",
      CSSClass: 'icon-google'
    },
    {
      link: 'https://microsoft.com/',
      caption: 'Microsoft',
      info: "Be what's next.",
      CSSClass: 'icon-microsoft'
    }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openModal() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(CalcModalComponent);
  }
}
