


const currentDay = ($('#currentDay'))
const currentHour = dayjs().hour()
console.log(currentHour)
$(function () {

  function saveText(){
    $('.saveBtn').on('click', function(){
      const hour = $(this).parent().attr('id')
      const description = $(this).siblings('.description').val()
      localStorage.setItem(hour,description)
    })
  }


  function compareHours(){
    const currentHour = dayjs().hour()
    $('.time-block').each(function () {
      const scheduleHour = parseInt($(this).attr('id').split('hour')[1])
      console.log(scheduleHour)
      if (scheduleHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
      else if (scheduleHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
    })

  
      $('.time-block').each(function(){
        const hour = $(this).attr('id')
        const description = localStorage.getItem(hour)
        $(this).children('.description').val(description)
      })
  
  }
  compareHours()
  saveText()
  
  
  setInterval(function () {
    currentDay.text(`${dayjs().format('ddd MMM DD, YYYY hh:mm:ss')}`)
    }, 1000)
});

