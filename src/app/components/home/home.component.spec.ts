import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { HeaderSectionComponent } from "../header-section/header-section.component";
import { FormSectionComponent } from "../form-section/form-section.component";
import { HelpSectionComponent } from "../help-section/help-section.component";
import { FormsModule } from "@angular/forms";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        FaIconComponent,
        HeaderSectionComponent,
        FormSectionComponent,
        HelpSectionComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
