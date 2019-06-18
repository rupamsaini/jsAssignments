let myTodosWithThis2 = {

    day: 'Tuesday',
    meetings: 12,
    meetDone: 6,

    addMeeting: function(num){
        this.meetings = this.meetings + num 
    },

    meetingsLeft: function(){
        let meetLeft = this.meetings - this.meetDone
        return meetLeft
    },

    summary: function(){

        return `You have ${this.meetings} meetings Today!`

    },

    reset: function(){
        this.meetings = 0
        this.meetDone = 0
    }
}


myTodosWithThis2.addMeeting(4)
console.log('Meetings Left: '+myTodosWithThis2.meetingsDone())
console.log(myTodosWithThis2.summary())