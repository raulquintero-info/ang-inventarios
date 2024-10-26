import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../../../core/auth/services/security.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{

  href: any;

  private router = inject(Router)
  private securityService = inject(SecurityService);

  ngOnInit(): void {
    // this.securityService.checkStatus().subscribe();
    this.href = this.router.url;
  }

}
