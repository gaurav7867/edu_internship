/// Strings are primitive data type that is used to work with text.
/// Immutable, Case-Sensitive


//toUpperCase()
var city = "lucknow";
city.toUpperCase();
/// 'LUCKNOW'

//toLowerCase()
var cityName = "MUMbai";
cityName.toLowerCase();
/// 'mumbai'

var city = "LucKnow"
city[0]
"L"
city[1]
"o"

//Length()
var city = "LucKnow"
city.length
7
var city = "lonDOn"
city.length
7
var city = "Lucknow"
city[city.length-1]
"w"
var city = "   lonDOn  "
city.length
11

// trim() => Remove the spaces from the starting.
city.trim()
"lonDOn"
city.trim().length
6
var name =" Nikita . "
name.trim()
"Nikita ."

var a = "John"
var b = "john"
a == b
false
a.toUpperCase() == b.toUpperCase()
true


//slice()
var city = "aMsTerDAm"
var name = "Bhumika"
name.slice(1)
"humika"
name.slice(2)
"umika"
name.slice(2,5)
"umi"
name.slice(-1)
"a"
name.slice(-1)
"ka"
name.slice(0,-1)
"Bhumik"
name.slice(0,-2)
"Bhumi"

//charAt()
name.charAt(0)
"B"
name.charAt(1)
"h"

var city = "aMsTerDAm"
city.charAt(0).toUpperCase()
"A"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
"Amsterdam"

//replace()
var a = "I am doing Js"
a.replace('Js','JavaScript')
"I am doing JavaScript"
var a ='JavaScript'
a.replace('a','A')
"JAvaScript"
a.replace(/a/g,'A')
"JAvAScript"
 var name = " Nikita . "
name.replace(/ /g,'')
"Nikita."
 var name = " Nikita . "
name.replace(/ /g,'-')
"-Nikita-.-"


//split()
var url = "https://github.com/Aakashdeveloper/edu_intern_web"
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "edu_intern_web"]
var a = url.split('/')
a[0]
"https:"
a[1]
""
a[4]
"edu_intern_web"
a[a.length-1]
"edu_intern_web"

var a ="JavaScript i am learning JavaScript"
a.split(' ')
["JavaScript", "i", "am", "learning", "JavaScript"]


var a = "JavaScript"
a.split('')
["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
var b = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

//toString()
b.toString()
"J,a,v,a,S,c,r,i,p,t"

b.toString().replace(/,/g,'')
"JavaScript"

// String Literals
var name = "Avengers"
var rating = 4.5
var type= "action"
var ind = "Hollywood"

//es5
var out ="An "+name+" is an "+type+" movie with rating of "+rating+" and from ind "+ind+"."
"An Avengers is an action movie with rating of 4.5 and from ind Hollywood."

//es6
var out = `An ${name} is an ${type} movie with rating of ${rating} and from ind ${ind}.`
"An Avengers is an action movie with rating of 4.5 and from ind Hollywood."