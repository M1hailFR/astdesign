interface IMenuItem {
  text: string;
  link: string;
}

export interface IHeaderDefaultProps {
  logo?: string;
  text?: string;
  theme?: string;
  type?: string;
  menu?: IMenuItem[];
  phone?: string;
  email?: string;
  buttonText?: string;
}
