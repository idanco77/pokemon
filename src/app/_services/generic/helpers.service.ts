import {Injectable} from "@angular/core";
import { Subject} from "rxjs";

@Injectable()
export class HelpersService {
  pageSpinnerSubject: Subject<boolean> = new Subject();

  setPageSpinner(isShown: boolean): void {
    setTimeout(() => this.pageSpinnerSubject.next(isShown), 0);
  }
}
