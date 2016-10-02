import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'configUi',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styles: [require('./configUi.scss')],
  template: require('./configUi.html')
})
export class ConfigUi {
  ApplicationDetailshtml: string = require('./components/ApplicationDetails/ApplicationDetails.html');
  CodeReviewhtml: string = require('./components/CodeReview/CodeReview.html');
  CodingStandardshtml: string = require('./components/CodingStandards/CodingStandards.html');
  AngularBestPracticehtml: string = require('./components/AngularBestPractice/AngularBestPractice.html');
  DevSetuphtml: string = require('./components/DevSetup/DevSetup.html');





  constructor() {}
}

