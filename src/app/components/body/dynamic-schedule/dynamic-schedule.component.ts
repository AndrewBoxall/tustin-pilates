import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-schedule',
  templateUrl: './dynamic-schedule.component.html',
  styleUrls: ['./dynamic-schedule.component.scss']
})
export class DynamicScheduleComponent implements OnInit {

  constructor() { }

  heroes = [{Apptype: 'Pilates', Date: 1, Instructor: 'Cassandra', Start: '600am', Finish: '700am'}, 
            {Apptype: 'Dance', Date: 2, Instructor: 'Bobby', Start: '700am', Finish: '830am'},
            {Apptype: 'Gym', Date: 3, Instructor: 'Bobby', Start: '700am', Finish: '900am'},
            {Apptype: 'Pilates', Date: 4, Instructor: 'Bobby', Start: '700am', Finish: '900am'},
            {Apptype: 'Dance', Date: 5, Instructor: 'Bobby', Start: '700am', Finish: '900am'},
            {Apptype: 'Gym', Date: 6, Instructor: 'Bobby', Start: '700am', Finish: '900am'},
            {Apptype: 'Gym', Date: 7, Instructor: 'Bobby', Start: '700am', Finish: '900am'}
          ];
  
  hours = [1,2,3,4];
  hourslist = `<ul><li *ngFor="let hour of hours">
  {{ hour }}
</li></ul>`

  positionItem(nxtHero, index){
    console.log('startHour: ' + nxtHero.Start);
    console.log('index: ' + index);
    var El = document.getElementById('hero' + index);
    var TimePlace = document.getElementById(nxtHero.Start);
    var recttime = TimePlace.getBoundingClientRect();
    var top = recttime.top - 230 + "px";
    El.style.left = 150 * nxtHero.Date + 50 + "px";
    El.style.top = top;
    var startTime = nxtHero.Start.substring(0, nxtHero.Start.length-2);
    console.log('startTime: ' + startTime);
    var finishTime = nxtHero.Finish.substring(0, nxtHero.Finish.length-2);
    console.log('finishTime: ' + finishTime);
    var duration = parseInt(finishTime) - parseInt(startTime);
    var hoursToSpan = Math.floor(duration/100);
    var mintuesToSpan = (duration % 100) / 60;
    var spanHeight = hoursToSpan + mintuesToSpan;
    console.log('spanHeight: ' + spanHeight);
    console.log('duration: ' + duration);
    console.log('hoursToSpan: ' + hoursToSpan);
    console.log('mintuesToSpan: ' + mintuesToSpan);
    El.style.height = 100*spanHeight + "px";
    //var rect = El.getBoundingClientRect();
    //console.log('Here2: ' + rect.top, rect.right, rect.bottom, rect.left);
  }
  ngOnInit() {
  }
  
}
