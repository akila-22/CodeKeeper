import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, map, of, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  optionssscontrol: any;
  title = 'CodeKeeper';
  newoptsub!: Observable<string[]>;
  filterForm: FormGroup = new FormGroup({
    optionsControl: new FormControl(''),
    optionsControlSub: new FormControl(''),
  });

  options: string[] = [
    'Css',
    'Scss',
    'Javascript',
    'Typescript',
    'Angular',
    'ReactJs',
    'ReactNative',
    'Other',
  ];

  optionSub: any[] = [
    {
      Css: ['css Intro', 'css Comments'],
    },
    {
      Scss: ['Scss Intro', 'Scss Comments'],
    },
    {
      Javascript: ['Js Intro', 'Js Comments'],
    },
    {
      Typescript: ['Typescript Intro', 'Typescript Comments'],
    },
    {
      Angular: ['Angular Intro', 'Angular Comments'],
    },
    {
      ReactJs: ['ReactJs Intro', 'ReactJs Comments'],
    },
    {
      ReactNative: ['ReactNative Intro', 'ReactNative Comments'],
    },
    {
      Other: ['Other Intro', 'ReactOtherJs Comments'],
    },
  ];

  filteredOptions!: Observable<string[]>;
  filteredOptionsSub!: Observable<string[]>;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.filteredOptions = this.filterForm
      .get('optionsControl')!
      .valueChanges.pipe(
        startWith(''),
        map((value) => this.filterFn(value || ''))
      );

    this.filteredOptionsSub = this.filterForm
      .get('optionsControlSub')!
      .valueChanges.pipe(
        startWith(''),
        map((value) => this.filterSubFn(value || ''))
      );
  }

  isActive(url: string): boolean {
    return this.router.url === url;
  }

  subclick() {
    const selectedOption = this.filterForm.get('optionsControl')?.value;
    for (let i = 0; i < this.optionSub.length; i++) {
      if (this.optionSub[i][selectedOption]) {
        this.newoptsub = of(this.optionSub[i][selectedOption]);
        break;
      } else {
        this.newoptsub = of([]);
      }
    }
    // this.filterForm.get('optionsControl')?.reset();
  }
  filterFn(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  filterSubFn(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
