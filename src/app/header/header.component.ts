import { BackEndService } from './../back-end.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private backendService: BackEndService) {}

  ngOnInit(): void {
    this.onFetch();
  }

  onSave(): void {
    this.backendService.saveData();
  }

  onFetch(): void {
    this.backendService.fetchData();
  }
}
