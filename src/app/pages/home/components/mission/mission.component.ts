import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
