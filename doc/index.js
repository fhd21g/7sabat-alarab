

// var moment =require('moment') 
  
var doc= function (body) {   
    const today = new Date();
    console.log("from doc", body)
return `
<!DOCTYPE html>
<html>

<head>
    <link
    href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400&display=swap"
    rel="stylesheet"
    />
    <style>
        *{
            box-sizing: border-box;
            font-family: Tajawal;
        }
        .invoice-container {
            margin: 0;
            padding: 0;
            padding-top: 10px;
            font-family: 'Roboto', sans-serif;
            width: 600px;
            margin: 0px auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        li {
            display: flex;
        }
        .imgTransform{
            z-index: 1;
            display: block;
            filter: brightness(1.5);
            opacity: 0.8;
            transform: rotate(336deg);
            -ms-transform:rotate(336deg); /* IE 9 */
            -moz-transform:rotate(336deg); /* Firefox */
            -webkit-transform:rotate(336deg); /* Safari and Chrome */
            -o-transform:rotate(336deg); /* Opera */
        }
    </style>
</head>

<body>
    <div class="invoice-container">
        <section class="header" style="display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 5px;
        width: 98%;">
            <table style="width: 100%;">
                <tr>
                    <td>
                        <div>
                            <ul style="list-style-type: none; ">
                                <li><img width="15px" style="margin-right:7px;"
                                        src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/11968623911579738440-512.png">966 560490595
                                </li>
                                <li><img width="15px" style="margin-right:7px;"
                                        src="https://static.cdnlogo.com/logos/t/96/twitter-icon.svg">arabcomputers 
                                </li>
                                <li><img width="15px" style="margin-right:7px;"
                                        src="https://icon-library.com/images/instragram-icon/instragram-icon-16.jpg">arabcomputers 
                                </li>
                            </ul>
                        </div>
                    </td>
                    <td>
                        <div>
                            <img class="logo"
                                src="https://arabcomputers.com.sa/wp-content/uploads/2022/04/AC-AAD-logo.png"
                                alt="logo" style="width: 160px; border-radius: 5px" />
                        </div>
                    </td>
                    <td>
                        <div>
                            <ul style="list-style-type: none;">
                                <li>info@arabcomputers.com</li>
                                <li>www.arabcomputers.com</li>
                                <li> السعودية - الرياض</li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </table>



        </section>
        <hr width="100%" color="gray" />

        <section class="wellcom" style="width: 90%;
        border-radius: 20px;
        border: solid 1px gray;
        display: flex;
        flex-direction: row;
        justify-content: center;">

        <table width="100%">
            <tr>
                <td><div style="text-align: center;"><strong> ${today.toISOString().split('T')[0]}</strong>
            </div></td>
                <td><div style="border-left: 1px solid #000;text-align: center;"><strong>#609580</strong>
            </div></td>
            </tr>
        </table>
            
            
        </section>
        <section class="wellcom" style="width: 90%;
        border-radius: 20px;
        border: solid 1px gray;
        display: flex;
        flex-direction: row;
        justify-content: center;">

        <table width="100%">
            <tr>
                <td>
                    <div style="border-left: 1px solid #000;text-align: center;">عميلنا 
                        <br> شكراً لتسوقك من حاسبات العرب
                        <br>تم انشاء طلبك بنجاح
                    </div>
                </td>
                <td>
                    <div style="text-align: right;">الاسم: ${body.name}
                        <br> رقم الجوال: ${body.phone}
                        <br>العنوان: ${body.address} / ${body.address2}
                     </div>
                </td>
            </tr>
        </table>
            
        </section>
        <section class="order" style="width:100%; direction: rtl;">
            <table style="
            color: #000;
            font-family: sans-serif;
            font-size: 16px;
            font-weight: 300;
            text-align: center;
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
          " class="item_table">
                <thead class="blueRow" style="
                      background-color: #308cbb;
                      width: 99%;
                      border-radius: 20px;
                      color: #fff;
                    ">
                    <tr>
                        <th style="
                          font-weight: bold;
                          padding: 10px;
                          border-bottom: 2px solid #000;
                        ">
                            #
                        </th>
                        <th style="
                          font-weight: bold;
                          padding: 10px;
                          border-bottom: 2px solid #000;
                        ">
                            اسم الجهاز
                        </th>
                        <th style="
                          font-weight: bold;
                          padding: 10px;
                          border-bottom: 2px solid #000;
                        ">
                            السعر
                        </th>
                        <th style="
                          font-weight: bold;
                          padding: 10px;
                          border-bottom: 2px solid #000;
                        ">
                            العدد
                        </th>
                        <th style="
                          font-weight: bold;
                          padding: 10px;
                          border-bottom: 2px solid #000;
                        ">
                            الاجمالي
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px">1</td>
                        <td style="border-bottom: 1px solid #ddd; max-width:50%; padding: 10px"><img width="50px" src="${body.image}"/> ${body.note} - ${body.color ? body.color : ""} </td>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px">
                        ${body.price} ر.س
                        </td>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px">1</td>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px">
                        ${body.price} ر.س
                        </td>
                    </tr>

                    <tr>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px" colspan="5"
                            style="text-align: right; padding: 10px">
                            <strong>اجمالي سعرالجهاز : </strong>  ${body.price} ر.س
                            <br>
                            <strong> نوع المعاملة  : </strong>  ${body.receivershipping =="on" ? "أقساط" : "كامل المبلغ كاش" } 
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        ${body.receivershipping =="on" ? `
        <section class="last" style="width: 90%;
                        padding-top: 10px;
                        direction: rtl;">
                            <table style="
                            color: #000;
                        font-family: sans-serif;
                        font-size: 16px;
                        font-weight: 300;
                        text-align: center;
                        border-collapse: separate;
                        border-spacing: 0;
                        width: 100%;
                    " class="item_table">
                <thead>
                    <tr class="blueRow" style="
                background-color: #308cbb;
                width: 99%;
                border-radius: 20px;
                color: #fff;
              ">
                        <th style="
                  font-weight: bold;
                  padding: 10px;
                  border-bottom: 2px solid #000;
                ">
                            #
                        </th>
                        <th style="
                  font-weight: bold;
                  padding: 10px;
                  border-bottom: 2px solid #000;
                ">
                           قيمة الدفعة
                        </th>
                        <th style="
                  font-weight: bold;
                  padding: 10px;
                  border-bottom: 2px solid #000;
                ">
                          مدة الاقساط
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px">1</td>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px">
                        ${body.monthy} ر.س
                        </td>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px">
                        ${body.month} شهر
                        </td>
                    </tr>
                    <tr>
                    <strong>دفعة اولى  : </strong>  1000 ر.س
                    </tr>
                </tbody>
            </table>
        </section>
        `:""}
        <section class="deliverd" style="width: 90%;
        border-radius: 20px;
        border: solid 1px gray;
        display: flex;
        flex-direction: row;
        justify-content: center;
        direction: rtl;
        margin-top: 10px;">
        <table style="width: 100%;">
            <tr>
                <td><div style="text-align: center;">التوصيل من خلال شركة  
                <br> شركة اراميكسو خلال 24 ساعة من الدفعة 
            </div></td>
                <td><div style="border-left: 1px solid #000;text-align: center;">
                <img class="imgTransform" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiujwb25ZZJhDv8AiEGojy-vqayjEMulX6B-Hdjyk1bHHY2D2gSOgD9egME53Yy1Ioo56X31v27qu2gSREHIHb_igXS2j7_aR5I2UZHPmHGa-RfeJdHchQvmEq8KI5-m65NTBz4iUIyZ03WJngXsbfU33qe2WGs4YoGQmmFyF9HIpSOAaOBA6Eax52C/s16000/%D8%B1%D9%82%D9%85-%D8%AD%D8%A7%D8%B3%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8.png" style="z-index:1; width:120px;"/>
            </div></td>
            </tr>
        </table>
            
            
        </section>
    
        <table>
            <tr>
                <td>
                  <div>
            <p></p>
            <p></p>
        </div>  
                </td>
                <td>
                  <div>
            <p>حاسبات العرب الاكتروني</p>
            <p>www.arabcomputers.com</p>
        </div>  
                </td>
                <td>
                  <div>
            <p></p>
            <p></p>
        </div>  
                </td>
            </tr>
        </table>
        
    </div>
</body>

</html>
`
;
};

module.exports = {
    doc
};
  