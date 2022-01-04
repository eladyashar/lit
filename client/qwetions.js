function Q1(){
    document.write("<form style='text-align: center;'>")
    document.write("<h3>questions time!!!</h3>")
    document.write("<label for='Q'>?איפה כדאי להטעין את הסוללה של האופניים החשמליים</label><br>")
    document.write("<input type='radio' id='ansuer1' name='ansuer' value='ansuer1'>")
    document.write("<label for=' מרחב דירתי מוגן (ממד)'>מרחב דירתי מוגן (ממד)</label><br>")
    document.write("<input type='radio' id='ansuer2' name='ansuer' value='ansuer2'>")
    document.write("<label for='במקלט'>במקלט</label><br>")
    document.write("<input type='radio' id='ansuer3' name='ansuer' value='ansuer3'>")
    document.write("<label for='בחדר שינה'>בחדר שינה</label>")
    document.write("<input type='radio' id='ansuer4' name='ansuer' value='ansuer4'>")
    document.write("<label for='בחצר'>בחצר</label>")
    document.write("</br>")
    document.write("<button type='submit' onclick='showQ1()'>בדיקה</button>")
    document.write("</form>")
}

function Q2(){
    document.write("<form style='text-align: center;'>")
    document.write("<h3>questions time!!!</h3>")
    document.write("<label for='Q'>?מה חשוב לוודא לגבי הסוללה והמטען לפני שקונים</label><br>")
    document.write("<input type='radio' id='ansuer1' name='ansuer' value='ansuer1'>")
    document.write("<label for='תו תקן'>תו תכן מכון התכנים הישראלי</label><br>")
    document.write("<input type='radio' id='ansuer2' name='ansuer' value='ansuer2'>")
    document.write("<label for='יצרן'>יצרן מוכר ואמין</label><br>")
    document.write("<input type='radio' id='ansuer3' name='ansuer' value='ansuer3'>")
    document.write("<label for='ספק'>ספק שמעניק אחריות</label>")
    document.write("<input type='radio' id='ansuer4' name='ansuer' value='ansuer4'>")
    document.write("<label for='הכול'>כול התשובות נכונות</label>")
    document.write("<button type='submit' onclick='showQ2()'>בדיקה</button>")
    document.write("</form>")
}


function Q3(){
    document.write("<form style='text-align: center;'>")
    document.write("<h3>questions time!!!</h3>")
    document.write("<label for='Q'>מתי לנתק את האופניים מהטעינה?</label><br>")
    document.write("<input type='radio' id='ansuer1' name='ansuer' value='ansuer1'>")
    document.write("<label for='10%'>10%</label><br>")
    document.write("<input type='radio' id='ansuer2' name='ansuer' value='ansuer2'>")
    document.write("<label for='100%'>100%</label><br>")
    document.write("<input type='radio' id='ansuer3' name='ansuer' value='ansuer3'>")
    document.write("<label for='85%'>85%</label>")
    document.write("<input type='radio' id='ansuer4' name='ansuer' value='ansuer4'>")
    document.write("<label for='220%'>220%</label>")
    document.write("<button type='submit' onclick='showQ3()'>בדיקה</button>")
    document.write("</form>")
}

var Qnom = Math.floor(Math.random()*3);
if(Qnom == 0){
    Q1()
}
if(Qnom == 1){
    Q2()
}if(Qnom == 2){
    Q3()
}
function showQ3(){
    window.location.href = "goTo.html";
    alert('85%התשובה הנכונה היא: ')
}
function showQ1(){
    window.location.href = "goTo.html";
    alert('מרחב דירתי מוגן (ממד)התשובה הנכונה היא: ')
}
function showQ2(){
    window.location.href = "goTo.html";
    alert('תו תכן מכון התכנים הישראלי התשובה הנכונה היא: ')
}

