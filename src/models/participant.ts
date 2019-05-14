export default class Participant {
  public name: string;
  public id: string;
  public technique: number = 0;
  public artistry: number = 0;
  public idea: number = 0;
  public commonContests: string[] = [];
  public what: number = 0;
  public how: number = 0;

  constructor(props: any) {
    this.name = props.name;
    this.id = props.id;
  }
}
