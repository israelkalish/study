

const temp = parseInt(prompt('what is the temp outside'))
const day = parseInt(prompt('enter todays day(answer with a number)'))
const hour = parseInt(prompt('what is the hour'))

if (temp>23) {
    console.log('תתלבש קיצי')}
else if (temp<=23 && temp>=17)
    {console.log('תתלבש ארוך')}
else console.log('תלבש מעיל')

if (day <=5){
        console.log('יום נעים')
    if(hour<=17 && hour>=8){
        console.log('לך לעבוד')}
    else if (hour<8) {
        console.log('לך לישון')}
    else {console.log('לך לחגוג')}
}
else{
console.log('סופש נעים לך תחגוג')}



