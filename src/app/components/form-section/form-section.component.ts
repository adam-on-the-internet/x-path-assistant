import { Component, OnInit } from "@angular/core";

import {
  faMapSigns,
  faMapMarkedAlt,
  faPlusSquare,
  faMinusSquare,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import {
  XpathDetailsModel,
  XpathSelectorModel,
  XpathConditionalModel
} from "src/app/models/XpathDetails.model";

@Component({
  selector: "app-form-section",
  templateUrl: "./form-section.component.html",
  styleUrls: ["./form-section.component.scss"]
})
export class FormSectionComponent implements OnInit {
  faMapSigns = faMapSigns;
  faMapMarkedAlt = faMapMarkedAlt;
  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;
  faExclamationTriangle = faExclamationTriangle;

  xpathDetails: XpathDetailsModel = {
    selectors: [
      {
        placement: "//",
        tag: "div",
        conditionals: []
      }
    ],
    index: null
  };
  xpathResult: string = null;
  invalidIds = false;

  public get validTags(): boolean {
    return this.xpathDetails.selectors.every(selector => {
      return selector.tag.length > 0;
    });
  }

  public get validConditionals(): boolean {
    return this.xpathDetails.selectors.every(selector => {
      return selector.conditionals.every(conditional => {
        return conditional.match.length > 0;
      });
    });
  }

  public get validIndex(): boolean {
    return !this.xpathDetails.index || Number(this.xpathDetails.index) > 0;
  }

  constructor() {}

  ngOnInit() {}

  public addRow(i: number) {
    const defaultSelector: XpathSelectorModel = {
      placement: "//",
      tag: "*",
      conditionals: []
    };
    this.xpathDetails.selectors.splice(i, 0, defaultSelector);
  }

  public removeConditionalFromElement(i: number, cindex: number) {
    this.xpathDetails.selectors[i].conditionals.splice(cindex, 1);
  }

  public addConditionalToElement(i: number) {
    const defaultConditional: XpathConditionalModel = {
      type: "id",
      match: ""
    };
    const selector = this.xpathDetails.selectors[i];
    const position = selector.conditionals.length;
    selector.conditionals.splice(position, 0, defaultConditional);
  }

  public removeRow(i: number) {
    this.xpathDetails.selectors.splice(i, 1);
  }

  public generateXpath() {
    this.xpathResult = null;
    let tempXpathResult = "";
    this.xpathDetails.selectors.forEach(selector => {
      tempXpathResult += selector.placement;
      tempXpathResult += selector.tag;
      if (selector.conditionals.length > 0) {
        tempXpathResult += this.buildConditionals(selector);
      }
    });
    if (this.xpathDetails.index) {
      tempXpathResult = `(${tempXpathResult})[${this.xpathDetails.index}]`;
    }
    this.xpathResult = tempXpathResult;
  }

  private buildConditionals(selector: XpathSelectorModel): string {
    let conditionString = "[";
    let idCount = 0;

    selector.conditionals.forEach((conditional, i) => {
      if (i > 0) {
        conditionString += " and ";
      }
      if (conditional.type === "id") {
        idCount++;
        conditionString += `@id='${conditional.match}'`;
      } else if (conditional.type === "class") {
        conditionString += `contains(@class, '${conditional.match}')`;
      } else if (conditional.type === "text") {
        conditionString += `contains(text(),'${conditional.match}')`;
      }
    });

    this.invalidIds = idCount > 1;
    conditionString += "]";
    return conditionString;
  }
}
