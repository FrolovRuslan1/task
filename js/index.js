(async ()=>{


    let buttonRisks = document.getElementsByClassName('tableLeft__topButtons__risks')[0];
    let buttonReports = document.getElementsByClassName('tableLeft__topButtons__reports')[0];
    let risks = document.getElementsByClassName('tableLeft__risks')[0];
    let reports = document.getElementsByClassName('tableLeft__reports')[0];

    buttonRisks.addEventListener('click', function () {
        let buttonReportsStyleBackground = buttonReports.style.backgroundColor;


        if (buttonReportsStyleBackground === 'rgb(126, 146, 173)') {
            buttonRisks.style.background = '#7e92ad';
            risks.style.display = 'flex';
            buttonReports.style.backgroundColor = '#fafafa';
            reports.style.display = 'none';
        }
    });


    buttonReports.addEventListener('click', function () {
        let buttonRisksStyleBackground = buttonRisks.style.backgroundColor;


        if (buttonRisksStyleBackground === 'rgb(126, 146, 173)') {
            buttonReports.style.backgroundColor = '#7e92ad';
            reports.style.display = 'flex';
            buttonRisks.style.backgroundColor = '#fafafa';
            risks.style.display = 'none';
        }
    })




})();