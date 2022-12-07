export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }

  logNewAccount(name: string) {
    console.log('A new account is created, account name is:' + name);
  }
}
