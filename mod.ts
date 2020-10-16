export class Module {
  items
  constructor() {

    this.items = [new employee("1","Mauli","50000","TSE"),
    new employee("2","Pooja","25000","TSE"),
    new employee("3","Ritakshi","30000","SSE"),
    new employee("4","Aparna","50000","SSE")]
  }

}

export class employee {
  empno;
  ename;
  sal;
  desig;
  constructor(empno,ename,sal,desig) {
    this.empno = empno;
    this.ename = ename;
    this.sal=sal;
    this.desig=desig;
  }
}