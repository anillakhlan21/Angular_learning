export interface ISport{
  football: IFootball[];
  cricket: any;
  golf: any;
}

export interface IFootball{
  stadium: string,
  country: string,
  region: string,
  tournament: string,
  start: string,
  match: string
}