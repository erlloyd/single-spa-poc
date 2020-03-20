import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "ships-ships-list",
  templateUrl: "./ships-list.component.html",
  styleUrls: ["./ships-list.component.scss"]
})
export class ShipsListComponent implements OnInit {
  public show: boolean;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.show = false;
  }

  toggle() {
    this.show = !this.show;
    // this.ref.detectChanges();
  }
}
