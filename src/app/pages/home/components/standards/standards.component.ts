import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-standards',
  templateUrl: './standards.component.html',
  styleUrls: ['./standards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
