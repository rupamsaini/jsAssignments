let isVerfied = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (isVerfied && isLoggedIn && hasPaymentToken)
{

console.log('Access Granted to paid courses :)')

}
else if(isVerfied || isGuest)
{
    console.log('Access to limited stuff only')
}
else
{
    console.log('Sorry, contact the site admin')
}