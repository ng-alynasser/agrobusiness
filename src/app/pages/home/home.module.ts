import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TrustSectionComponent } from './components/trust-section/trust-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { QualitySectionComponent } from './components/quality-section/quality-section.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { MissionComponent } from './components/mission/mission.component';
import { ObjectivesComponent } from './components/objectives/objectives.component';
import { StandardsComponent } from './components/standards/standards.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCarouselComponent,
    TrustSectionComponent,
    ExperienceSectionComponent,
    QualitySectionComponent,
    IntroductionComponent,
    MissionComponent,
    ObjectivesComponent,
    StandardsComponent,
  ],
  imports: [SharedModule, HomeRoutingModule, CarouselModule],
})
export class HomeModule {}
