import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menudetail',
  templateUrl: './menudetail.page.html',
  styleUrls: ['./menudetail.page.scss'],
})
export class MenudetailPage implements OnInit {
  constructor(private route: ActivatedRoute) {}

  queryParms = this.route.snapshot.queryParams;
  title_param = this.queryParms.title;
  context_param = this.queryParms.context;
  createdAt_param = +this.queryParms.createdAt * 1;

  created_date = new Date(this.createdAt_param).toLocaleDateString();
  ngOnInit() {}
}
