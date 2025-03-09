interface IMenuItem {
  text: string;
  link: string;
}

interface IDeveloper {
  icon?: string;
  name: string;
  link: string;
}

export interface IFooterDefaultProps {
  logo?: string;
  text?: string;
  theme?: string;
  type?: string;
  menu?: IMenuItem[];
  phone?: string;
  email?: string;
  buttonText?: string;
  developer?: IDeveloper;
}
