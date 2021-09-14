import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css']
})

/* implements OnChanges */
export class InputtextComponent {
  @Input() label = "";
  @Input() campo = "";
  @Input() placeholder = "";
  @Input() idCampo = Math.random();
  @Input() helpblock = "";
  @Input() campoId = false;
  @Input() disabled = false;
  @Input() autocomplete = "off";
  @Input() maxlength = "";
  @Input() readonly = false;
  @Output() onChange = new EventEmitter();
  @Output() onBlur = new EventEmitter();
  @Output() onFocusIn = new EventEmitter();
  @Output() onFocusOut = new EventEmitter();

  /*   letCampo:string; */

  constructor() { }

  /*   ngOnChanges(changes: SimpleChanges){
      if(changes.input){
          this.letCampo = this.campo;
      }
    } */

  change() {
    this.onChange.emit((this.campo == null ? null : this.campo.trim()));
  }

  blur() {
    this.onBlur.emit(this.campo);
  }

  focusIn() {
    this.onFocusIn.emit(this.campo);
  }

  focusOut() {
    this.onFocusOut.emit(this.campo);
  }

}
