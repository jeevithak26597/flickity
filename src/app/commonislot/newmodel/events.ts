export class EventModel {
    name:string;
    date:string;
    startTime:string;
    endTime:string;
    createdBy:number;
    locatioin:string;
    skill:Array<string>;
    idClosed:boolean;
    splitTime:Array<String>;
    slots:Array<{slotStarTime:String,slotEndTime:String,interviewers:Array<{id:number,name:string,mail:string,mobileNo:number,noOfInterviews:number}>}>;
    constructor(name:string,date:string,startTime:string,endTime:string,createdBy:number,locatioin:string,skill:Array<string>){
             this.name=name;
             this.date=date;
             this.startTime=startTime;
             this.endTime=endTime;
             this.createdBy=createdBy;
             this.locatioin=locatioin;
             this.skill=skill;
             this.idClosed=false;
             this.splitTime=this.timeArray(startTime,endTime);
             this.slots=[{
                 slotStarTime:this.splitTime[0],
                 slotEndTime:this.splitTime[1],
                 interviewers:[]
             },
             {
                slotStarTime:this.splitTime[1],
                slotEndTime:this.splitTime[2],
                interviewers:[]
            },
            {
                slotStarTime:this.splitTime[2],
                slotEndTime:this.splitTime[3],
                interviewers:[]
            },
            {
                slotStarTime:this.splitTime[3],
                slotEndTime:this.splitTime[4],
                interviewers:[]
            },
            ]

        
        }
         timeArray(start1, end1){
            var start = String(start1).split(":");
            var end = String(end1).split(":");
        
            var startmin = parseInt(start[0]) * 60 + parseInt(start[1]);
            var endmin = parseInt(end[0]) * 60 + parseInt(end[1]);
            var temp= (endmin-startmin)/4;
            var result = [];
        
            for (var time = startmin; time <= endmin; time+=temp){
                result.push( this.timeString(time));
            }
            
            return result;
        }
        
         timeString(time){
            var hours = String(Math.floor(time / 60));
            var minutes = String(time % 60);
        
            if (hours < "10") hours = "0" + hours; //optional
            if (minutes < "10") minutes = "0" + minutes;
        
            return hours + ":" + minutes;
        }

}
