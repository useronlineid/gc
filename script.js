document.getElementById('saveImage').addEventListener('click', function() {
    const transactionDate = document.getElementById('transactionDate').value || "-";
    const notes = document.getElementById('notes').value || "-";
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const amount = document.getElementById('amount').value || "-";
    const referenceNumber = document.getElementById('referenceNumber').value || "-";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=674.5,height=953.5');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/help/blob/main/am1.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 105px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">บริษัท จิงฮวด คอร์ปอเรชั่น จำกัด</p>
                <p style="position: absolute; top: 125px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">JING HUAD CORPORATION COMPANY LIMITED</p>
                <p style="position: absolute; top: 145px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">ที่ตั้งบริษัท: 33/3 หมู่ที่ 5 ตำบลราชาเทวะ อำเภอบางพลี จ.สมุทรปราการ 10</p>

                <p style="position: absolute; top: 40px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เลขที่ 16895/2567</p>     
                
                <p style="position: absolute; top: 180px; left: 500px; color:#656565; font-size: 20px; font-weight: bold;">${transactionDate}</p>     
                <p style="position: absolute; top: 218px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรื่อง: ยืนยันการรับวงเงิน</p>     
                <p style="position: absolute; top: 250px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรียน ${accountNumber}</p>     
                
                <p style="position: absolute; top: 290px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                บันทึกข้อตกลงนี้ทำขึ้น ณ บริษัท จิงฮวด คอร์ปอเรชั่น จำกัด เมื่อวันที่ ${transactionDate} ระหว่าง 
${accountNumber} ซึ่งต่อไปในบันทึกข้อตกลงนี้ เพื่อเป็นประกันในการรับวงเงิน ว่าทำหลังจาก${notes}เสร็จสิ้นแล้ว
สามารถทำการเบิกถอนเงินได้ทันที
                </p>     
                
                <p style="position: absolute; top: 378px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ทั้งสองฝ่ายได้ตกลงกัน มีข้อความดังต่อไปนี้
                </p>    
                
                <p style="position: absolute; top: 405px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ข้อ1 ข้อตกลงในการยืนยันการรับยอดเงิน<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                หลังจากสมาชิกทำการ${notes} จำนวนเงิน ${amount} บาท เรียบร้อยแล้ว สามารถเบิกถอนเงิน
ได้ทั้งหมด ${referenceNumber} บาท ทันที โดยไม่ติดเงื่อนไขเกี่ยวกับระบบ หากสมาชิกทำการ${notes}
เรียบร้อยแล้ว หากมีระบบผิดพลาด หรือขัดข้อง ทางบริษัทจะรับผิดชอบยอดเงิน ${referenceNumber} บาท 
ให้กับสมาชิกโดยทันที
                </p>     


                <p style="position: absolute; top: 530px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                หมายเหตุ: เพื่อยืนยันการรับวงเงินส่วนนี้ ตามข้อตกลงทั้งสองฝ่าย หลังจากทำการ${notes} เรียบร้อยแล้ว ไม่สามารถ
เบิกถอนเงินได้ทางระบบจะรับผิดชอบทั้งหมด
                </p>     
                <p style="position: absolute; top: 730px; left: 420px; color:#656565; font-size: 20px; font-weight: bold;">ขอแสดงความนับถือ</p>     
                <p style="position: absolute; top: 810px; left: 405px; color:#656565; font-size: 20px; font-weight: bold;">(นายวัฒน สุนทรมั่นคงศรี)</p>                 
                <p style="position: absolute; top: 835px; left: 360px; color:#656565; font-size: 20px; font-weight: bold;">ผู้จัดการ บริษัท จิงฮวด คอร์ปอเรชั่น จำกัด</p>                 
                <p style="position: absolute; top: 860px; left: 387px; color:#656565; font-size: 20px; font-weight: bold;"> ออก ณ วันที่ ${transactionDate}</p>                 

              </div>

          
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <script>
                window.onload = function() {
                    html2canvas(document.getElementById('capture')).then(canvas => {
                        document.body.appendChild(canvas);
                        const link = document.createElement('a');
                        link.download = 'output.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    });
                };
            </script>
        </body>
        </html>
    `);
});
