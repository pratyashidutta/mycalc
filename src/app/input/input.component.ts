import { Component, OnInit } from '@angular/core';
import { MycalcService } from '../mycalc.service'; 

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  selected
 

  constructor(private obj: MycalcService) { }

  ngOnInit() {
    

  }
  num1
  num2
  res1
  add(){
  
    this.res1=Number(this.num1)+Number(this.num2);
    this.obj.res2=this.res1;
    console.log(this.res1);
    // console.log(this.res);
  
}
  subtract(){
   
    this.res1=Number(this.num1)-Number(this.num2);
    this.obj.res2=this.res1;
   
  }
   multiply(){
  
    this.res1=Number(this.num1)*Number(this.num2);
    this.obj.res2=this.res1;
  
}
  divide(){
   
    this.res1=Number(this.num1)/Number(this.num2);
    this.obj.res2=this.res1;
  
}

}
