export class Skill {
    name:string;
    interviewersHavingSkill:Array<{id:number,pointsForSkill:number}>;
    constructor(name:string){
      this.name=name;
      this.interviewersHavingSkill=[];
    }
}
