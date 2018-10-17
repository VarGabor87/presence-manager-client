import {LogsModel} from './logs.model';
import * as moment from 'moment';

export class UserModel {
  public _id: String;
  public name: String;
  public email: String;
  public password: String;
  public repeatPassword: String;
  public contractId: String;
  public accessLevel: String;
  public _group: String;
  public isGeneratedPassword: Boolean;
  public logs: LogsModel[];
  public macAddress: String;
}
