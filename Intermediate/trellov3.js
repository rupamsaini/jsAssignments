

let myTodos = {

    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(msg){
        console.log(msg)
    }
}

myTodos.addMeeting('This is how we use methods/function in objects')

let myTodosWithThis = {

    day: 'Tuesday',
    meetings: 12,
    meetDone: 4,

    addMeeting: function(){
        console.log(this)
    }
}

myTodosWithThis.addMeeting()

let myTodosWithThis2 = {

    day: 'Tuesday',
    meetings: 12,
    meetDone: 6,

    addMeeting: function(num){
        this.meetings = this.meetings + num 
    },

    meetLeft: function(){
        let meetDone = this.meetings - this.meetDone
        return meetDone
    },

    summary: function(){

        return `You have ${this.meetings} left!`

    }
}

myTodosWithThis2.addMeeting(4)
console.log(myTodosWithThis2.meetLeft())
console.log(myTodosWithThis2.summary())