import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NewsPage } from '../news/news';
import { MediaPage } from '../media/media';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
  tab1Root = NewsPage;
  tab5Root = MediaPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = HomePage;

  constructor() {

  }
}
