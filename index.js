var musicianArray = ["John Lennon","Paul McCartney","Ringo Star","George Harrison"];
var instrumentArray = ["Guitar","Bass","Drums","Piano"];
var outputArray = [];


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicianArray,instrumentArray)
{
  
  var musician = "";
  var instrument = "";
  var tempArray = [];
  
  for(var x=0;x < this.musicianArray.length; x++)
  {
    musician = this.musicianArray[x].toString();
    for(var y=0; y < this.instrumentArray.length; y++)
    {
      instrument = this.instrumentArray[y].toString();
      tempArray[x+y] = musician + " plays " + instrument;  //x+y since it will never overlap
      
    }//instrumentArray For Loop
  }//musicianArray For Loop
  
  return tempArray;
 
}//theBeatlesPlay() end



function johnLennonFacts(facts)
{
 /* var counter = 0;
  var tempArray = [];
  while(counter < this.facts.length)
  {
    tempArray[counter] = this.facts[counter].toString() + "!!!";
    counter++;
  }*/
  return tempArray;
}//johnlennonFacts() end



//------------ TESTING ZOOOOONE!!! --------------
alert(theBeatlesPlay(musicianArray,instrumentArray)); //calls theBeatlesPlay() and assings the return Array to outputArray
alert(johnLennonFacts(facts));
