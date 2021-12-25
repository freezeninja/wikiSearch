import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() submitted = new EventEmitter<string>();
  textInput = ''

  constructor() { }

  ngOnInit(): void {}

  inputFires(event: any){
    // console.log(event.target.value);
    let value = event.target.value;
    this.textInput = value;    
  }
  formSubmit(event: any){
    event.preventDefault()
    // console.log(this.textInput);
    this.submitted.emit(this.textInput)
  }
}
