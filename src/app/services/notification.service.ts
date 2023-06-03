import { Injectable } from '@angular/core';
import { ActiveToast, IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  info(
    message?: string | undefined,
    title?: string | undefined,
    override?: Partial<IndividualConfig<any>> | undefined
  ): ActiveToast<any> {
    return this.toastr.info(message, title, override);
  }

  warn(
    message?: string | undefined,
    title?: string | undefined,
    override?: Partial<IndividualConfig<any>> | undefined
  ): ActiveToast<any> {
    return this.toastr.warning(message, title, override);
  }

  success(
    message?: string | undefined,
    title?: string | undefined,
    override?: Partial<IndividualConfig<any>> | undefined
  ): ActiveToast<any> {
    return this.toastr.success(message, title, override);
  }

  error(
    message?: string | undefined,
    title?: string | undefined,
    override?: Partial<IndividualConfig<any>> | undefined
  ): ActiveToast<any> {
    return this.toastr.error(message, title, override);
  }
}
