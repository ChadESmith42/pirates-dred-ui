import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pirates-dred-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  copyright = '';
  now: number = new Date().getFullYear();
  initialPublicationYear = 2025;

  ngOnInit(): void {
    this.copyright = this.setCopyright(this.now);
  }

  setCopyright(date: number): string {
    return date > this.initialPublicationYear ? `${this.initialPublicationYear}-${date}` : `${date}`;
  }
}
