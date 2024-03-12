var myGlobal = 10; // global variable

function fun1()
{
    oopsGlobal = 11; //global value without var specifier 
}

function fun2()
{
    var output = "";
    if(myGlobal != "undefined")
    {
        output += "myGlobal" + myGlobal;
    }
    if(oopsGlobal != "undefined")
    {
        output += "oopsGlobal" + oopsGlobal;
    }
    console.log(output);
    fun1();
    fun2();

}

var changed = 0;
function change(num)
{
    return (num+5)/3;
    
}

changed = change(10);
console.log(changed);