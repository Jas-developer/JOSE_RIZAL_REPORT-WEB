export enum SelectedPage {
  Home = "home",
  Benifits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus" }





export  interface BenifitType {
  icon: JSX.Element;
  title:string;
  description:string;
}


export interface ClassType {
  name:string;
  description?:string;
  image:string;
}