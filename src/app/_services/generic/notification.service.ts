import { Injectable } from "@angular/core";
declare const swal: any;

@Injectable()
export class NotificationService {

  public success(title: string, text?: string): void {
    let options = {
      icon: 'success',
      position: 'center',
      title: title,
      text: text ? text : '',
      confirmButtonText: 'Confirm',
      timer: 1000,
    };

    swal.fire(options);
  }

  public error(text?: string, title?: string): void {
    let options = {
      icon: 'error',
      title: title ? title : 'Error occurred',
      text: text,
      confirmButtonText: 'Close',
    };

    swal.fire(options);
  }

  public info(title: string, text?: string): Promise<any> {
    let options = {
      icon: 'info',
      title: title,
      text: text ? text : '',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    };

    return swal.fire(options);
  }
}
