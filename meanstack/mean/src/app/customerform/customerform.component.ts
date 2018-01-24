import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {

  customer : Customer = new Customer();
  constructor() { }
  save(customerForm: NgForm)
  {
    console.log(customerForm.form);
    console.log('saved: ' + JSON.stringify(customerForm.value));

  }

  ngOnInit() {
  }

}
