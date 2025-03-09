export interface IFieldsProps<T> {
  fields: T;
  paddingTop?: string | number;
  paddingBottom?: string | number;
}

export type ClassPropType = string | string[];

export enum LinkTargetEnum {
  TARGET = "_target",
  SELF = "_self",
}

export type LinkTargetType = `${LinkTargetEnum}`;

export enum SidesEnum {
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
  LEFT = "left",
}

export type SidesType = `${SidesEnum}`;

export enum SizesEnum {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}
export type SizesType = `${SizesEnum}`;

export enum ElementVariantsEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export type ElementVariantsTypes = `${ElementVariantsEnum}`;
