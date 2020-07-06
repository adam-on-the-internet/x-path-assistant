import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormSectionComponent } from "./form-section.component";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";

describe("FormSectionComponent", () => {
  let component: FormSectionComponent;
  let fixture: ComponentFixture<FormSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormSectionComponent, FaIconComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
