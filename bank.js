


let Mainpage = document.getElementById('main-page');
let createPage = document.getElementById('create');
let LoginBtn = document.getElementById("login-btn");
Mainpage.style.display = 'none';
LoginBtn.addEventListener('click', function(){
    let Login_box = document.getElementById("login-box");
    let AccNum = document.getElementById("ac_num").value;
    let Pass = document.getElementById("Pass").value;
    //Login_box.style.display = "none";
    if(AccNum == ''){
        alert('Sir, Please Enter Your Unique Id');
    }
    else if (Pass==''){
        alert('Sir, Please Enter Your Password');
    }
    else{
        Login_box.style.display = "none";
        Mainpage.style.display = 'block';
    } 
    document.getElementById('ac_num').value = '';
   
});

//Bank Balance //Deposite
let depositeBtn = document.getElementById('deposite-btn');
depositeBtn.addEventListener('click', function(){
    let depositeInput = document.getElementById('deposite-input').value;
    let addBalance = document.getElementById('add-balance').innerHTML;

    let depositeInputNew = parseFloat(depositeInput);
    let addBalanceNew = parseFloat(addBalance);
    
    let totalDeposite = addBalanceNew + depositeInputNew;
    document.getElementById('add-balance').innerHTML = totalDeposite.toFixed(1)

    //All-Balance

    let allBalance = document.getElementById('all-balance').innerHTML;
    let allBalanceNew = parseFloat(allBalance);
    let allBalanceNewNow = depositeInputNew + allBalanceNew;
    document.getElementById('all-balance').innerHTML = allBalanceNewNow.toFixed(2)

    document.getElementById('deposite-input').value = '';
   
})
//Withdraw
let withdrawBtn = document.getElementById('depo-btn');
withdrawBtn.addEventListener('click', function(){
    let withdrawInput = document.getElementById('withdraw-input').value;
    let withdrawInputNew = parseFloat(withdrawInput);

    let depoBalance  = document.getElementById('depo-balance').innerHTML;
    let depoBalanceNew = parseFloat(depoBalance);

    let totalWithdraw = depoBalanceNew + withdrawInputNew;
    document.getElementById('depo-balance').innerHTML = totalWithdraw.toFixed(2);

    let totalBalance = document.getElementById('all-balance').innerHTML;
    let newBalance = parseFloat(totalBalance);
    let seci = newBalance -  withdrawInputNew;
    document.getElementById('all-balance').innerHTML = seci.toFixed(2);

    document.getElementById('withdraw-input').value = '';

    
})