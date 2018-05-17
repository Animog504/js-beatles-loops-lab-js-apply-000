var musicianArray = ["John Lennon","Paul McCartney","Ringo Star","George Harrison"];
var instrumentArray = ["Guitar","Bass","Drums","Piano"];
var outputArray = [];

/*const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]; DECLARED ALREADY IGNORE*/ 

function theBeatlesPlay(musicianArray,instrumentArray)
{
  var counter = 0
  var musician = "";
  var instrument = "";
  var tempArray = [];
  
  for(var x=0;x < this.musicianArray.length; x++)
  {
    for(var y=0; y < this.instrumentArray.length; y++)
    {
      musician = this.musicianArray[x].toString();
      instrument = this.instrumentArray[y].toString();
      tempArray[counter] = musician + " plays " + instrument;  
      counter++
    }//instrumentArray For Loop
  }//musicianArray For Loop
  
  return tempArray;
 
}//theBeatlesPlay() end



function johnLennonFacts(factArray)
{
  var counter = 0;
  var tempArray = [];
  while(counter < factArray.length)
  {
    tempArray[counter] = factArray[counter].toString() + "!!!";
    counter++;
  }
  return tempArray;
}//johnlennonFacts() end

function iLoveTheBeatles(num)
{

    var loveBeatles = [];
	do{
	loveBeatles[num] = "I love the Beatles!";
		

    }while(num<15)
}



//------------ TESTING ZOOOOONE!!! --------------
//alert(theBeatlesPlay(musicianArray,instrumentArray));
//alert(johnLennonFacts(facts));

undefined
var musicianArray = ["John Lennon","Paul McCartney","Ringo Star","George Harrison"];
var instrumentArray = ["Guitar","Bass","Drums","Piano"];
var outputArray = [];
/*const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]; DECLARED ALREADY IGNORE*/ 

function theBeatlesPlay(musicianArray,instrumentArray)
{
  var counter = 0
  var musician = "";
  var instrument = "";
  var tempArray = [];
  
  for(var x=0;x < this.musicianArray.length; x++)
  {
    for(var y=0; y < this.instrumentArray.length; y++)
    {
      musician = this.musicianArray[x].toString();
      instrument = this.instrumentArray[y].toString();
      tempArray[counter] = musician + " plays " + instrument;  
      counter++
    }//instrumentArray For Loop
  }//musicianArray For Loop
  
  return tempArray;
 
}//theBeatlesPlay() end



function johnLennonFacts(factArray)
{
  var counter = 0;
  var tempArray = [];
  while(counter < factArray.length)
  {
    tempArray[counter] = factArray[counter].toString() + "!!!";
    counter++;
  }
  return tempArray;
}//johnlennonFacts() end

function iLoveTheBeatles(num)
{
    var counter = 0;
    var loveBeatles = [];
	do{
  		loveBeatles[counter] = "I love the Beatles!";
  		counter++;
  		num++;
    }while(num<15)
	return loveBeatles;
}