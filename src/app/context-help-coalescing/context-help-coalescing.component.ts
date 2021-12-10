import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-context-help-coalescing',
  templateUrl: './context-help-coalescing.component.html',
  styleUrls: ['./context-help-coalescing.component.scss'],
})
export class ContextHelpCoalescingComponent implements OnInit {
  @Input('context') content!: string;

  @ViewChild('container') containerRef!: ElementRef;

  showHelp = false;

  // @HostListener('document:click', ['$event'])
  documentClicked({ target }: MouseEvent) {
    if (!this.containerRef.nativeElement.contains(target)) {
      this.showHelp = false;
    }
  }

  // @HostListener('window:keydown.Escape')
  escapedClicked(): void {
    this.showHelp = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
