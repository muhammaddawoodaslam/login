import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/shared/services/network.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {
  networks: any[];
  categories: any[];
  communities: any[];
  state: string;
  constructor(private networkService: NetworkService, ) { }

  ngOnInit(): void {
    this.getNetworks();
    this.state = 'networks'; 
  }

  getNetworks(): void {
    this.networkService.getNetworks().subscribe((res) => {
      if (res) {
        this.networks = res.data;
      } else {
        alert("error updating user");
      }
    });
  }

  getCategories(id): void {
    this.networkService.getCategories(id).subscribe((res) => {
      if (res) {
        this.categories = res.data;
        this.state = 'categories';

      } else {
        alert("error updating user");
      }
    });
  }

  getCommunities(key): void {
    this.networkService.getCommunities(key).subscribe((res) => {
      if (res) {
        this.communities = res.data;
        this.state = 'communities';
      } else {
        alert("error updating user");
      }
    });
  }

  changeCard(card) {
    this.state = card;
  }

  iconClass(key) {
    if(key == 'healthcare') {
      return 'i-First-Aid text-32 mr-3';
    }
    
    if(key == 'realestate') {
      return 'i-Building text-32 mr-3';
    }
    
    if(key == 'influencers') {
      return 'i-Business-ManWoman text-32 mr-3';
    }
    
    if(key == 'legaltech') {
      return 'i-Cloud-Laptop text-32 mr-3';
    }
    
    if(key == 'religion') {
      return 'i-University1 text-32 mr-3';
    }
    
    if(key == 'education') {
      return 'i-Book text-32 mr-3';
    }
    
    if(key == 'smartcities') {
      return 'i-Home-4 text-32 mr-3';
    }
  }
    
}