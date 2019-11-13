import { Component, OnInit } from '@angular/core';
import { MycalcService} from '../mycalc.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private obj: MycalcService ) { }

  ngOnInit() {
   this.res3=this.obj.res2;
  }
  res3

}
