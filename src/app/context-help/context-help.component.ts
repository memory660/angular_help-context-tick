import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'context-help',
  templateUrl: './context-help.component.html',
  styleUrls: ['./context-help.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextHelpComponent implements OnInit {
  @Input('context') content!: string;
  @ViewChild('container') containerRef!: ElementRef;
  showHelp = false;

  @HostListener('document:click', ['$event'])
  documentClicked({ target }: MouseEvent) {
    if (!this.containerRef.nativeElement.contains(target)) {
      this.showHelp = false;
    }
  }

  @HostListener('window:keydown.Escape')
  escapedClicked(): void {
    this.showHelp = false;
  }

  ngOnInit(): void {
    console.log('000000000000');
  }
}
