TimeSpan=function(a,b){this.days=0,this.hours=0,this.minutes=0,this.seconds=0,this.milliseconds=0;var c=a<0?-1:1;return this.milliseconds=Math.abs(a),b=b||Math.floor,this.days=b(this.milliseconds/864e5)*c,this.milliseconds=this.milliseconds%864e5,this.hours=b(this.milliseconds/36e5)*c,this.milliseconds=this.milliseconds%36e5,this.minutes=b(this.milliseconds/6e4)*c,this.milliseconds=this.milliseconds%6e4,this.seconds=b(this.milliseconds/1e3)*c,this.milliseconds=this.milliseconds%1e3,this.milliseconds=this.milliseconds*c,this},TimeSpan.prototype.compare=function(a){var b=new Date(1970,1,1,this.hours(),this.minutes(),this.seconds()),c;return a===null?c=new Date(1970,1,1,0,0,0):c=new Date(1970,1,1,a.hours(),a.minutes(),a.seconds()),b>c?1:b<c?-1:0},TimeSpan.prototype.add=function(a){return a===null?this:this.addSeconds(a.getTotalMilliseconds()/1e3)},TimeSpan.prototype.subtract=function(a){return a===null?this:this.addSeconds(-a.getTotalMilliseconds()/1e3)},TimeSpan.prototype.addDays=function(a){return new TimeSpan(this.getTotalMilliseconds()+a*24*60*60*1e3)},TimeSpan.prototype.addHours=function(a){return new TimeSpan(this.getTotalMilliseconds()+a*60*60*1e3)},TimeSpan.prototype.addMinutes=function(a){return new TimeSpan(this.getTotalMilliseconds()+a*60*1e3)},TimeSpan.prototype.addSeconds=function(a){return new TimeSpan(this.getTotalMilliseconds()+a*1e3)},TimeSpan.prototype.addMilliseconds=function(a){return new TimeSpan(this.getTotalMilliseconds()+a)},TimeSpan.prototype.getTotalMilliseconds=function(){return this.days()*864e5+this.hours()*36e5+this.minutes()*6e4+this.seconds()*1e3},TimeSpan.prototype.get12HourHour=function(){return(h=this.hours()%12)?h:12},TimeSpan.prototype.getDesignator=function(){return this.hours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator},TimeSpan.prototype.toString=function(a){function b(){return this.days()!==null&&this.days()>0?this.days()+"."+this.hours()+":"+c(this.minutes())+":"+c(this.seconds()):this.hours()+":"+c(this.minutes())+":"+c(this.seconds())}function c(a){return a.toString().length<2?"0"+a:a}var d=this;return a?a.replace(/d|dd|HH|H|hh|h|mm|m|ss|s|tt|t/g,function(a){switch(a){case"d":return d.days();case"dd":return c(d.days());case"H":return d.hours();case"HH":return c(d.hours());case"h":return d.get12HourHour();case"hh":return c(d.get12HourHour());case"m":return d.minutes();case"mm":return c(d.minutes());case"s":return d.seconds();case"ss":return c(d.seconds());case"t":return(this.hours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator).substring(0,1);case"tt":return this.hours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator}}):this._toString()};var TimePeriod=function(a,b,c){this.years=0,this.months=0,this.days=0,this.hours=0,this.minutes=0,this.seconds=0,this.milliseconds=0;var d=a.clone(),e=b.clone(),f=d.clone(),g=d>e?-1:1;this.years=e.getFullYear()-d.getFullYear(),f.addYears(this.years),g==+1?f>e&&this.years!==0&&this.years--:f<e&&this.years!==0&&this.years++,d.addYears(this.years);if(g==+1)while(d<e&&d.clone().addDays(d.getDaysInMonth())<=e)d.addMonths(1),this.months++;else while(d>e&&d.clone().addDays(-d.getDaysInMonth())>=e)d.addMonths(-1),this.months--;var h=e-d;if(h!==0){var i=new TimeSpan(h,c);this.days=i.days,this.hours=i.hours,this.minutes=i.minutes,this.seconds=i.seconds,this.milliseconds=i.milliseconds}return this.years>=1&&(this.months>0||this.days>0)&&(this.years+=1),this.months>=1&&this.months<11&&this.days>0&&(this.months+=1),this}