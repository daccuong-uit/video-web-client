import { Component } from '@angular/core';
import { PageShellComponent, SidebarMenuItem, GLOBAL_MENU_ITEMS } from '@fe/ui';
import { VideoComponent } from '../video/video.component';
import { VideoRightSidebarComponent } from '../video-right-sidebar/video-right-sidebar.component';

@Component({
  standalone: true,
  selector: 'fe-video-shell',
  imports: [PageShellComponent, VideoComponent, VideoRightSidebarComponent],
  template: `
    <ui-page-shell [menuItems]="menuItems" brandLink="/video">
      <fe-video slot="main"></fe-video>
      <fe-video-right-sidebar slot="rightbar"></fe-video-right-sidebar>
    </ui-page-shell>
  `,
})
export class VideoShellComponent {
  menuItems: SidebarMenuItem[] = GLOBAL_MENU_ITEMS;
}
