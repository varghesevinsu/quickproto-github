import { allowedValuesValidator } from '@baseapp/widgets/validators/allowedValuesValidator';
import { BsModalService, ModalOptions, BsModalRef } from 'ngx-bootstrap/modal';
import { ApplicationUserService } from '@baseapp/application-user/application-user/application-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit, Component } from '@angular/core';
import { ActionItem } from '@baseapp/widgets/action-bar/action-bar.component';
import { AppGlobalService } from '@baseapp/app-global.service';
import { DomSanitizer } from '@angular/platform-browser';
import { dateValidator } from '@baseapp/widgets/validators/dateValidator';
import { DialogService } from 'primeng/dynamicdialog';
import { debounceTime, fromEvent, distinctUntilChanged, of, Observer, map, Observable } from 'rxjs';
import { BreadcrumbService } from '@baseapp/widgets/breadcrumb/breadcrumb.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { WorkflowSimulatorComponent } from '@baseapp/widgets/workflow-simulator/workflow-simulator.component';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { ChangeLogsComponent } from '@baseapp/widgets/change-logs/change-logs.component';
import { environment } from '@env/environment';
import { ApplicationUserDetailBaseComponent } from '@baseapp/application-user/application-user/application-user-detail/application-user-detail.base.component';
import { AppUtilBaseService } from '@baseapp/app-util.base.service';
import { ConfirmationPopupComponent } from '@baseapp/widgets/confirmation/confirmation-popup.component';
import { AppBaseService } from '@baseapp/app.base.service';
import { BaseAppConstants } from '@baseapp/app-constants.base';

@Component({
  selector: 'app-application-user-detail',
  templateUrl: '../../../../../base/app/application-user/application-user/application-user-detail/application-user-detail.component.html',
  styleUrls: ['./application-user-detail.scss']
})
export class ApplicationUserDetailComponent extends ApplicationUserDetailBaseComponent implements OnInit {
 
  constructor(public override applicationUserService: ApplicationUserService, public override appUtilBaseService: AppUtilBaseService, public override translateService: TranslateService, public override messageService: MessageService, public override confirmationService: ConfirmationService, public override dialogService: DialogService, public override domSanitizer: DomSanitizer, public override bsModalService: BsModalService, public override activatedRoute: ActivatedRoute, public override breadcrumbService: BreadcrumbService, public override appBaseService: AppBaseService, public override router: Router, public override appGlobalService: AppGlobalService, public override location: Location) {
    super(applicationUserService, appUtilBaseService, translateService, messageService, confirmationService, dialogService, domSanitizer, bsModalService, activatedRoute, breadcrumbService, appBaseService, router, appGlobalService, location);
  }
	
  ngAfterViewInit(): void {
    this.onAfterViewInit()
  }

  ngOnInit(): void {
    super.onInit();
  }
 
}