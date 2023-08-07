

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
      * {
        box-sizing: border-box;
        font-family: Tajawal;
      }
      .invoice-container {
        margin: 0;
        padding: 0;
        padding-top: 10px;
        font-family: "Roboto", sans-serif;
        width: 600px;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      li {
        display: flex;
      }
      .imgTransform {
        z-index: 1;
        display: block;
        filter: brightness(1.5);
        opacity: 0.8;
        transform: rotate(336deg);
        -ms-transform: rotate(336deg); /* IE 9 */
        -moz-transform: rotate(336deg); /* Firefox */
        -webkit-transform: rotate(336deg); /* Safari and Chrome */
        -o-transform: rotate(336deg); /* Opera */
      }
    </style>
  </head>

  <body>
    <div class="invoice-container">
      <section
        class="header"
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 5px;
          width: 98%;
        "
      >
        <table style="width: 100%">
          <tr>
            <td>
                <div>
                  <ul style="list-style-type: none">
                    <li style="text-align: center;font-size: 14px;" style="font-weight: bold;"">
                         حاسبات العرب الالكتروني 
                    </li>
                    <li > <span style="margin: auto;text-align: center; font-size: 12px;">الأول في المملكة العربية</span> </li>
                  <li style="text-align: center;"> <span style="margin: auto; font-size: 12px;">  السعودية - الرياض </span> </li>
                  </ul>
                </div>
              </td>
            <td>
              <div>
                <img
                  class="logo"
                  src="https://arabcomputers.com.sa/wp-content/uploads/2022/04/AC-AAD-logo.png"
                  alt="logo"
                  style="width: 160px; border-radius: 5px"
                />
              </div>
            </td>
            <td>
              <div>
                <ul style="list-style-type: none">
                    <li style="text-align: center; style="font-weight: bold;"">
                          arabcomputers ELECTRONIC  
                    </li>
                  <li > <span style="margin: auto;text-align: center; font-size: 14px;"> the first store in the kingdom on</span> </li>
                  <li style="text-align: center;"> <span style="margin: auto; font-size: 14px;">Saudi Arabia </span> </li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
      </section>
      <hr width="100%" color="gray" />

      <section
        class="wellcom"
        style="
          width: 90%;
          border-radius: 20px;
          border: solid 1px gray;
          display: flex;
          flex-direction: row;
          justify-content: center;
        "
       >
        <table width="100%">
        <tr>
            <td>
            <div style="text-align: center">
                <strong>عقد بيع بالتقسيط</strong>
            </div>
            </td>
        </tr>
        </table>
      </section>
 
      <!--text start  -->
      <section
            class="wellcom"
            style="
            width: 90%;
            
            display: flex;
            flex-direction: row;
            justify-content: center;
            "
        >
            <table width="100%">
            <tr>
                <td>
                <div style="direction: rtl;">
                                    <p style="font-size: 15px; margin:10px">
                                        <span  >التاريخ: </span> <strong style="font-weight: bold;font-size: 16px;"> ${today.toISOString().split('T')[0]}</strong> 
                                        <br>
                                        نعم انا السيد / <strong style="font-weight: bold;font-size: 16px;">${body.name}</strong>  برقم جوال <strong style="font-weight: bold;font-size: 16px;">${body.phone}</strong>
                                        و عنوان /: <strong>${body.address} / ${body.address2}</strong>
                                        </p>
                                        <br>
                                    <p style="font-size: 15px; margin:10px">
                                        أقر واعترف وانا في حالتي الشرعية وبكامل قواي العقلية بأني في ذمتي للمؤسسة المدعوة /: حاسبات العرب
                                        مبلغ وقدره /: <strong style="font-weight: bold; font-size: 16px;"> ${body.price - 1000} </strong>  ريال فقط.
                                        وذلك قيمة عن ما تبقى من ثمن جهاز /: ${body.note} - ${body.color ? body.color : ""}  
                                        على ان يدفع المبلغ على اقساط شهرية متتالية ومستمرة بدون انقطاع بما فيها شهر رمضان و الاعياد 
                                        قيمة الدفعة الشهرية /: <strong style="font-weight: bold; font-size: 16px;"> ${body.monthy} </strong> ريال فقط اعتبارا من تاريخ /: <strong> ${today.toISOString().split('T')[0]}</strong>
                                        نهاية المبلغ المذكور اعلاه وأنني بسداد الاقساط في موعدها بدون تأخر عن أي قسط عن موعده المحدد فإني ملتزم التزاما
                                        تاما بسداد المبلغ المتبقي كاملا دفعة واحدة.
                                        كما انني أقر على نفسي بأنه لا يوجد التزامات مالية ولا كفالات غرامية وقد اذنت والله خير الشاهدين.
                                    </p>
                </div>
                </td>
            </tr>
            </table>
      </section>
      <section>
        <table>
            <tr>
                <td>
                    <p style="text-align: center;">الختم </p>
                    <br>
                    <div style=" text-align: center;">
                        <img class="imgTransform" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiujwb25ZZJhDv8AiEGojy-vqayjEMulX6B-Hdjyk1bHHY2D2gSOgD9egME53Yy1Ioo56X31v27qu2gSREHIHb_igXS2j7_aR5I2UZHPmHGa-RfeJdHchQvmEq8KI5-m65NTBz4iUIyZ03WJngXsbfU33qe2WGs4YoGQmmFyF9HIpSOAaOBA6Eax52C/s16000/%D8%B1%D9%82%D9%85-%D8%AD%D8%A7%D8%B3%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8.png" style="z-index:1; width:120px;"/>
                    </div>
                  </td>
                <td>
                <div style="width: 300px;">
                   
                </div>
              </td>
              <td>
                <div>
                  <p>الاسم: <strong style="font-weight: bold; font-size: 16px;">${body.name}</strong></p> 
                   <p><span> ................. </span> :التوقيع</p> 
                </div>
              </td>
            </tr>
          </table>
      </section>
     
      <table>
        <tr>
          <td>
            <div style="width: 150px;">
              <p></p>
              <p></p>
            </div>
          </td>
          <td>
            <div>
              <p>حاسبات العرب arabcomputers </p>
              <p>www.arabcomputers.com</p>
            </div>
          </td>
          <td>
            <div style="width: 150px;">
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
  