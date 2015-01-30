define({name:"Effort vs Cycle Time",description:"Show correlation between Effort and Cycle Time for User Stories and Bugs",type:"scatterplot",classNames:["scatterplot1-userstory","scatterplot1-increase","scatterplot2-bug","scatterplot2-increase"],tags:["Kanban","Cycle time"],reportSettings:{dataSource:{source:{filter:"?EntityState.IsFinal is true and EndDate >= Today - 182(days) and Effort > 0",items:[{id:"UserStory"},{id:"Bug"}]},dimensions:[{id:"cycleTime",model:"cycleTime"},{id:"effort",model:"effort"},{id:"entityType",model:"entityType.name"}]},report:{x:"effort",y:"cycleTime",color:"entityType",dimensions:{effort:{type:"measure",scale:"linear"},cycleTime:{type:"measure",scale:"linear"},entityType:{type:"category",scale:"ordinal"}},guide:[{x:{label:"Effort"},y:{label:"Cycle Time in days"}}]}}});