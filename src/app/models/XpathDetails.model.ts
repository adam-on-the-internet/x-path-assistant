export interface XpathDetailsModel {
  selectors: XpathSelectorModel[];
  index?: number;
}

export interface XpathSelectorModel {
  placement: string;
  tag: string;
  conditionals: XpathConditionalModel[];
}

export interface XpathConditionalModel {
  type: string;
  match: string;
}
