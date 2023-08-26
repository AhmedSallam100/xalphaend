/* eslint-disable jsx-a11y/anchor-is-valid */
import Aside from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollUp from "../../components/ScrollUp";
import MainTitle from "../../components/MainTitle";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Articles = () => {
  return (
    <>
      <div className="page d-flex">
        <Aside />
        <div className="content w-full">
          <Header />
          <MainTitle title="المقالات" />
          <div
            className="container-8"
            style={{
              paddingBottom: "60px",
            }}
          >
            <div className="wb-1 m-wb bg-white p-10 m-10">
              <div className="inf inf-2">
                <h3 className="my-h3-2 my-h3">
                  ما هو الكلين كود ولماذا هو مهم؟
                </h3>
              </div>
            </div>
            <pre className="my-pre">
              {" "}
              ليه ال clean كود مهم ؟هو - اوقات بتسمع مصطلح زى كلمه انك Loosely
              coupled او عدم الاعتماديه ان مفيش class يعتمد عالتانى طب الكلام دا
              ليه بمثال سهل وواقعى بوست النهارده تحت عنوان ال Dependency
              Injection ⛔️مقدمة - طبعا انت سمعت عن ال مبادئ ال SOLID طب لو
              متعرفهاش او محتاج تراجع عليها هسيب ليك البوست اللى شرحناها فيه فى
              الكومنتات فاكر بقا اخر حرف فى المبادئ دى بالظبط اللى هو حرف ال D
              دا بقا كان اختصار ل Dependency inversion ودا المبدأ العام لل
              Dependency Injection . المعنى الحرفى للكلمه دى هو الحقن يعنى تجيب
              حاجه جاهزه من مكان تانى وتزودها عندك بدل ما تعملها من اول وجديد.
              ⛔️الهدف - 1- تسهيل القرأه 2- سهل التعديل 3- سهل فى عمليه ال
              Testing 4- سهل فى اعاده الاستخدام - ⛔️مثال واقعى من غير رغى كتير
              تعالى ناخد كود قبل وبعد ونشوف الفرق - //Before class Employee
              {`{  
            Address address;  
            Employee(){  
            address=new Address();  
            } }`}
              - ------------------------------------------------------ // After
              class Employee
              {`{  
            {Address address;  
            Employee(Address address){  
            this.address=address;  
            }} }`}
              - فين المشكله هنا يا عم مش فارقه كتير ! طب لو انا قولت ليك انك غير
              فى كلاس ال address وابعت دلوقت قيمه ال city , street هتعمل ايه؟
              الكود الاول: هتروح تضطر يا تغير ال constructor بتاع ال Employee
              عشان ياخد بارمتر (city , street) ويباصيها لل Address او هتباصيها
              فى ميثود فى الحالتين انت غيرت كلاس ال Employee دا معنى الاعتماديه
              ان كلاس ال Employee معتمد على ال Address لو اتغير محتاج يتغير
              عشانه الكود التانى : لا يباشا مش محتاج دا كله انت هتظبط كلاس ال
              Address برا وتبعته لل Employee مهما يتغير ال Employee ملوش دعوه
              ومش هيتغير عشان حد هو بياخد اوبجيكت وخلاص ويستغله زى ما هو عايز
              ودى عمليه ال inject استفد ايه - ارجع اقرأ الهدف تانى من ال
              dependency injection وطبق على المثال وهتعرف استفد ايه من انك تشتغل
              بالكود التانى مش الاول - ⛔️الى اللقاء - يلا سلاااااام.
            </pre>
          </div>
          <ScrollUp />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Articles;
