import { Component, OnInit, TemplateRef } from '@angular/core';
import { PagesService } from '../../../../services/statics/pages.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-pages-main',
  templateUrl: './pages-main.component.html',
  styleUrls: ['./pages-main.component.css']
})
export class PagesMainComponent implements OnInit {
  pages
  modalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };
  constructor(
    private pageS: PagesService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.pageS.getPages()
      .then(pages => {
        this.pages = pages
      })
      .catch(res => {
        console.log(res);
      })
  }

  private updatePage(page) {
    this.pageS.updatePage(page)
      .then(res => {
        this.ngOnInit()
      })
      .catch(res => {
        console.log(res);
      })
  }
  private openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
}
